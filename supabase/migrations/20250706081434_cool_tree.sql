-- Search Functions for Mettyerng Database
-- Advanced search capabilities with full-text search and filtering

-- Global search function across all content types
CREATE OR REPLACE FUNCTION global_search(
    search_query TEXT,
    content_types TEXT[] DEFAULT ARRAY['news', 'projects', 'events', 'videos'],
    limit_results INTEGER DEFAULT 50
)
RETURNS TABLE (
    content_type TEXT,
    id UUID,
    title TEXT,
    title_km TEXT,
    excerpt TEXT,
    url_slug TEXT,
    category_name TEXT,
    published_date TIMESTAMPTZ,
    relevance_score REAL
) AS $$
BEGIN
    RETURN QUERY
    WITH search_results AS (
        -- Search in news
        SELECT 
            'news'::TEXT as content_type,
            n.id,
            n.title,
            n.title_km,
            n.excerpt,
            n.slug as url_slug,
            c.name as category_name,
            n.published_at as published_date,
            ts_rank(
                to_tsvector('english', n.title || ' ' || COALESCE(n.content, '') || ' ' || COALESCE(n.excerpt, '')),
                plainto_tsquery('english', search_query)
            ) as relevance_score
        FROM news n
        LEFT JOIN categories c ON n.category_id = c.id
        WHERE n.status = 'published'
        AND 'news' = ANY(content_types)
        AND (
            to_tsvector('english', n.title || ' ' || COALESCE(n.content, '') || ' ' || COALESCE(n.excerpt, '')) 
            @@ plainto_tsquery('english', search_query)
            OR n.title ILIKE '%' || search_query || '%'
            OR n.title_km ILIKE '%' || search_query || '%'
        )
        
        UNION ALL
        
        -- Search in projects
        SELECT 
            'project'::TEXT as content_type,
            p.id,
            p.title,
            p.title_km,
            p.description as excerpt,
            p.slug as url_slug,
            c.name as category_name,
            p.created_at as published_date,
            ts_rank(
                to_tsvector('english', p.title || ' ' || COALESCE(p.description, '') || ' ' || COALESCE(p.long_description, '')),
                plainto_tsquery('english', search_query)
            ) as relevance_score
        FROM projects p
        LEFT JOIN categories c ON p.category_id = c.id
        WHERE p.status IN ('active', 'completed')
        AND 'projects' = ANY(content_types)
        AND (
            to_tsvector('english', p.title || ' ' || COALESCE(p.description, '') || ' ' || COALESCE(p.long_description, '')) 
            @@ plainto_tsquery('english', search_query)
            OR p.title ILIKE '%' || search_query || '%'
            OR p.title_km ILIKE '%' || search_query || '%'
        )
        
        UNION ALL
        
        -- Search in events
        SELECT 
            'event'::TEXT as content_type,
            e.id,
            e.title,
            e.title_km,
            e.description as excerpt,
            e.slug as url_slug,
            c.name as category_name,
            e.start_datetime as published_date,
            ts_rank(
                to_tsvector('english', e.title || ' ' || COALESCE(e.description, '')),
                plainto_tsquery('english', search_query)
            ) as relevance_score
        FROM events e
        LEFT JOIN categories c ON e.category_id = c.id
        WHERE e.status IN ('upcoming', 'ongoing', 'completed')
        AND 'events' = ANY(content_types)
        AND (
            to_tsvector('english', e.title || ' ' || COALESCE(e.description, '')) 
            @@ plainto_tsquery('english', search_query)
            OR e.title ILIKE '%' || search_query || '%'
            OR e.title_km ILIKE '%' || search_query || '%'
        )
        
        UNION ALL
        
        -- Search in videos
        SELECT 
            'video'::TEXT as content_type,
            v.id,
            v.title,
            v.title_km,
            v.description as excerpt,
            v.id::TEXT as url_slug,
            c.name as category_name,
            v.created_at as published_date,
            ts_rank(
                to_tsvector('english', v.title || ' ' || COALESCE(v.description, '')),
                plainto_tsquery('english', search_query)
            ) as relevance_score
        FROM videos v
        LEFT JOIN categories c ON v.category_id = c.id
        WHERE v.status = 'published'
        AND 'videos' = ANY(content_types)
        AND (
            to_tsvector('english', v.title || ' ' || COALESCE(v.description, '')) 
            @@ plainto_tsquery('english', search_query)
            OR v.title ILIKE '%' || search_query || '%'
            OR v.title_km ILIKE '%' || search_query || '%'
        )
    )
    SELECT *
    FROM search_results
    WHERE relevance_score > 0
    ORDER BY relevance_score DESC, published_date DESC
    LIMIT limit_results;
END;
$$ LANGUAGE plpgsql;

-- Advanced project search with filters
CREATE OR REPLACE FUNCTION search_projects(
    search_query TEXT DEFAULT '',
    category_ids UUID[] DEFAULT NULL,
    status_filter TEXT[] DEFAULT NULL,
    date_from DATE DEFAULT NULL,
    date_to DATE DEFAULT NULL,
    min_beneficiaries INTEGER DEFAULT NULL,
    max_beneficiaries INTEGER DEFAULT NULL,
    limit_results INTEGER DEFAULT 20,
    offset_results INTEGER DEFAULT 0
)
RETURNS TABLE (
    id UUID,
    title TEXT,
    title_km TEXT,
    description TEXT,
    slug TEXT,
    status TEXT,
    start_date DATE,
    end_date DATE,
    beneficiaries_reached INTEGER,
    budget_used DECIMAL,
    category_name TEXT,
    is_featured BOOLEAN,
    created_at TIMESTAMPTZ
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        p.id,
        p.title,
        p.title_km,
        p.description,
        p.slug,
        p.status,
        p.start_date,
        p.end_date,
        p.beneficiaries_reached,
        p.budget_used,
        c.name as category_name,
        p.is_featured,
        p.created_at
    FROM projects p
    LEFT JOIN categories c ON p.category_id = c.id
    WHERE 
        (search_query = '' OR (
            to_tsvector('english', p.title || ' ' || COALESCE(p.description, '')) 
            @@ plainto_tsquery('english', search_query)
            OR p.title ILIKE '%' || search_query || '%'
            OR p.title_km ILIKE '%' || search_query || '%'
        ))
        AND (category_ids IS NULL OR p.category_id = ANY(category_ids))
        AND (status_filter IS NULL OR p.status = ANY(status_filter))
        AND (date_from IS NULL OR p.start_date >= date_from)
        AND (date_to IS NULL OR p.start_date <= date_to)
        AND (min_beneficiaries IS NULL OR p.beneficiaries_reached >= min_beneficiaries)
        AND (max_beneficiaries IS NULL OR p.beneficiaries_reached <= max_beneficiaries)
    ORDER BY 
        CASE WHEN search_query != '' THEN
            ts_rank(
                to_tsvector('english', p.title || ' ' || COALESCE(p.description, '')),
                plainto_tsquery('english', search_query)
            )
        ELSE 0 END DESC,
        p.is_featured DESC,
        p.created_at DESC
    LIMIT limit_results
    OFFSET offset_results;
END;
$$ LANGUAGE plpgsql;

-- Search users with role and department filters
CREATE OR REPLACE FUNCTION search_users(
    search_query TEXT DEFAULT '',
    role_names TEXT[] DEFAULT NULL,
    department_ids UUID[] DEFAULT NULL,
    is_active_filter BOOLEAN DEFAULT NULL,
    limit_results INTEGER DEFAULT 20
)
RETURNS TABLE (
    id UUID,
    first_name TEXT,
    last_name TEXT,
    first_name_km TEXT,
    last_name_km TEXT,
    email TEXT,
    profile_image_url TEXT,
    roles TEXT[],
    departments TEXT[],
    is_active BOOLEAN,
    created_at TIMESTAMPTZ
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        u.id,
        u.first_name,
        u.last_name,
        u.first_name_km,
        u.last_name_km,
        u.email,
        u.profile_image_url,
        ARRAY_AGG(DISTINCT r.name) FILTER (WHERE r.name IS NOT NULL) as roles,
        ARRAY_AGG(DISTINCT d.name) FILTER (WHERE d.name IS NOT NULL) as departments,
        u.is_active,
        u.created_at
    FROM users u
    LEFT JOIN user_roles ur ON u.id = ur.user_id AND ur.is_active = true
    LEFT JOIN roles r ON ur.role_id = r.id
    LEFT JOIN user_departments ud ON u.id = ud.user_id AND ud.is_active = true
    LEFT JOIN departments d ON ud.department_id = d.id
    WHERE 
        (search_query = '' OR (
            u.first_name ILIKE '%' || search_query || '%'
            OR u.last_name ILIKE '%' || search_query || '%'
            OR u.first_name_km ILIKE '%' || search_query || '%'
            OR u.last_name_km ILIKE '%' || search_query || '%'
            OR u.email ILIKE '%' || search_query || '%'
        ))
        AND (role_names IS NULL OR r.name = ANY(role_names))
        AND (department_ids IS NULL OR d.id = ANY(department_ids))
        AND (is_active_filter IS NULL OR u.is_active = is_active_filter)
    GROUP BY u.id, u.first_name, u.last_name, u.first_name_km, u.last_name_km, 
             u.email, u.profile_image_url, u.is_active, u.created_at
    ORDER BY u.first_name, u.last_name
    LIMIT limit_results;
END;
$$ LANGUAGE plpgsql;

-- Get content suggestions based on user activity
CREATE OR REPLACE FUNCTION get_content_suggestions(
    user_id_param UUID,
    content_type_param TEXT DEFAULT 'news',
    limit_results INTEGER DEFAULT 10
)
RETURNS TABLE (
    id UUID,
    title TEXT,
    title_km TEXT,
    excerpt TEXT,
    category_name TEXT,
    published_date TIMESTAMPTZ,
    relevance_score REAL
) AS $$
BEGIN
    -- Get user's interaction history to determine preferences
    RETURN QUERY
    WITH user_preferences AS (
        SELECT 
            l.likeable_id as content_id,
            COUNT(*) as interaction_score
        FROM likes l
        WHERE l.user_id = user_id_param
        AND l.likeable_type = content_type_param
        GROUP BY l.likeable_id
    ),
    user_categories AS (
        SELECT 
            CASE content_type_param
                WHEN 'news' THEN n.category_id
                WHEN 'project' THEN p.category_id
                WHEN 'event' THEN e.category_id
            END as category_id,
            COUNT(*) as category_score
        FROM user_preferences up
        LEFT JOIN news n ON content_type_param = 'news' AND up.content_id = n.id
        LEFT JOIN projects p ON content_type_param = 'project' AND up.content_id = p.id
        LEFT JOIN events e ON content_type_param = 'event' AND up.content_id = e.id
        WHERE category_id IS NOT NULL
        GROUP BY category_id
    )
    SELECT 
        CASE content_type_param
            WHEN 'news' THEN n.id
            WHEN 'project' THEN p.id
            WHEN 'event' THEN e.id
        END as id,
        CASE content_type_param
            WHEN 'news' THEN n.title
            WHEN 'project' THEN p.title
            WHEN 'event' THEN e.title
        END as title,
        CASE content_type_param
            WHEN 'news' THEN n.title_km
            WHEN 'project' THEN p.title_km
            WHEN 'event' THEN e.title_km
        END as title_km,
        CASE content_type_param
            WHEN 'news' THEN n.excerpt
            WHEN 'project' THEN p.description
            WHEN 'event' THEN e.description
        END as excerpt,
        c.name as category_name,
        CASE content_type_param
            WHEN 'news' THEN n.published_at
            WHEN 'project' THEN p.created_at
            WHEN 'event' THEN e.start_datetime
        END as published_date,
        COALESCE(uc.category_score::REAL / 10.0, 0.1) + 
        CASE content_type_param
            WHEN 'news' THEN (n.views_count::REAL / 1000.0)
            WHEN 'project' THEN (p.views_count::REAL / 1000.0)
            WHEN 'event' THEN (EXTRACT(EPOCH FROM (e.start_datetime - NOW())) / 86400.0 / 30.0)
        END as relevance_score
    FROM categories c
    LEFT JOIN user_categories uc ON c.id = uc.category_id
    LEFT JOIN news n ON content_type_param = 'news' AND c.id = n.category_id AND n.status = 'published'
    LEFT JOIN projects p ON content_type_param = 'project' AND c.id = p.category_id AND p.status IN ('active', 'completed')
    LEFT JOIN events e ON content_type_param = 'event' AND c.id = e.category_id AND e.status IN ('upcoming', 'ongoing')
    WHERE 
        CASE content_type_param
            WHEN 'news' THEN n.id IS NOT NULL
            WHEN 'project' THEN p.id IS NOT NULL
            WHEN 'event' THEN e.id IS NOT NULL
        END
        AND CASE content_type_param
            WHEN 'news' THEN n.id NOT IN (SELECT likeable_id FROM likes WHERE user_id = user_id_param AND likeable_type = 'news')
            WHEN 'project' THEN p.id NOT IN (SELECT likeable_id FROM likes WHERE user_id = user_id_param AND likeable_type = 'project')
            WHEN 'event' THEN e.id NOT IN (SELECT likeable_id FROM likes WHERE user_id = user_id_param AND likeable_type = 'event')
        END
    ORDER BY relevance_score DESC, published_date DESC
    LIMIT limit_results;
END;
$$ LANGUAGE plpgsql;

-- Search function with autocomplete suggestions
CREATE OR REPLACE FUNCTION get_search_suggestions(
    partial_query TEXT,
    suggestion_limit INTEGER DEFAULT 10
)
RETURNS TABLE (
    suggestion TEXT,
    suggestion_type TEXT,
    match_count INTEGER
) AS $$
BEGIN
    RETURN QUERY
    WITH suggestions AS (
        -- Title suggestions from news
        SELECT 
            title as suggestion,
            'news_title' as suggestion_type,
            1 as match_count
        FROM news
        WHERE status = 'published'
        AND title ILIKE '%' || partial_query || '%'
        
        UNION ALL
        
        -- Title suggestions from projects
        SELECT 
            title as suggestion,
            'project_title' as suggestion_type,
            1 as match_count
        FROM projects
        WHERE status IN ('active', 'completed')
        AND title ILIKE '%' || partial_query || '%'
        
        UNION ALL
        
        -- Category suggestions
        SELECT 
            name as suggestion,
            'category' as suggestion_type,
            COUNT(*)::INTEGER as match_count
        FROM categories
        WHERE name ILIKE '%' || partial_query || '%'
        GROUP BY name
        
        UNION ALL
        
        -- Tag suggestions
        SELECT 
            UNNEST(tags) as suggestion,
            'tag' as suggestion_type,
            COUNT(*)::INTEGER as match_count
        FROM (
            SELECT tags FROM news WHERE status = 'published'
            UNION ALL
            SELECT tags FROM projects WHERE status IN ('active', 'completed')
        ) all_tags
        WHERE UNNEST(tags) ILIKE '%' || partial_query || '%'
        GROUP BY UNNEST(tags)
    )
    SELECT 
        s.suggestion,
        s.suggestion_type,
        s.match_count
    FROM suggestions s
    ORDER BY s.match_count DESC, s.suggestion
    LIMIT suggestion_limit;
END;
$$ LANGUAGE plpgsql;