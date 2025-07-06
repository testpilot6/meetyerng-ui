-- Dashboard Statistics Views
-- Materialized views for performance optimization

-- Overall organization statistics
CREATE MATERIALIZED VIEW IF NOT EXISTS dashboard_stats AS
SELECT 
    (SELECT COUNT(*) FROM users WHERE is_active = true) as total_users,
    (SELECT COUNT(*) FROM projects WHERE status IN ('active', 'completed')) as total_projects,
    (SELECT COUNT(*) FROM events WHERE status IN ('upcoming', 'ongoing', 'completed')) as total_events,
    (SELECT COUNT(*) FROM news WHERE status = 'published') as total_news,
    (SELECT COUNT(*) FROM sponsors WHERE status = 'active') as total_sponsors,
    (SELECT COUNT(*) FROM volunteer_applications WHERE status = 'approved') as total_volunteers,
    (SELECT COALESCE(SUM(beneficiaries_reached), 0) FROM projects) as total_beneficiaries,
    (SELECT COALESCE(SUM(total_contribution), 0) FROM sponsors) as total_contributions,
    NOW() as last_updated;

-- Project statistics by category
CREATE MATERIALIZED VIEW IF NOT EXISTS project_stats_by_category AS
SELECT 
    c.name as category_name,
    c.name_km as category_name_km,
    COUNT(p.id) as project_count,
    COALESCE(SUM(p.beneficiaries_reached), 0) as total_beneficiaries,
    COALESCE(SUM(p.budget_used), 0) as total_budget_used,
    COALESCE(AVG(p.budget_used::float / NULLIF(p.budget_allocated, 0) * 100), 0) as avg_budget_utilization
FROM categories c
LEFT JOIN projects p ON c.id = p.category_id AND p.status IN ('active', 'completed')
WHERE c.content_type = 'project'
GROUP BY c.id, c.name, c.name_km, c.display_order
ORDER BY c.display_order;

-- Monthly activity statistics
CREATE MATERIALIZED VIEW IF NOT EXISTS monthly_activity_stats AS
SELECT 
    DATE_TRUNC('month', created_at) as month,
    COUNT(*) FILTER (WHERE table_name = 'news') as news_published,
    COUNT(*) FILTER (WHERE table_name = 'projects') as projects_created,
    COUNT(*) FILTER (WHERE table_name = 'events') as events_created,
    COUNT(*) FILTER (WHERE table_name = 'users') as users_registered
FROM (
    SELECT 'news' as table_name, created_at FROM news WHERE status = 'published'
    UNION ALL
    SELECT 'projects' as table_name, created_at FROM projects
    UNION ALL
    SELECT 'events' as table_name, created_at FROM events
    UNION ALL
    SELECT 'users' as table_name, created_at FROM users
) combined_data
WHERE created_at >= NOW() - INTERVAL '12 months'
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month DESC;

-- Top performing content
CREATE MATERIALIZED VIEW IF NOT EXISTS top_content_stats AS
SELECT 
    'news' as content_type,
    id,
    title as title_en,
    title_km,
    views_count,
    likes_count,
    comments_count,
    created_at
FROM news 
WHERE status = 'published'
UNION ALL
SELECT 
    'project' as content_type,
    id,
    title as title_en,
    title_km,
    views_count,
    likes_count,
    0 as comments_count,
    created_at
FROM projects
UNION ALL
SELECT 
    'video' as content_type,
    id,
    title as title_en,
    title_km,
    views_count,
    likes_count,
    0 as comments_count,
    created_at
FROM videos
WHERE status = 'published'
ORDER BY views_count DESC, likes_count DESC
LIMIT 50;

-- Volunteer engagement statistics
CREATE MATERIALIZED VIEW IF NOT EXISTS volunteer_engagement_stats AS
SELECT 
    u.id as user_id,
    u.first_name,
    u.last_name,
    u.first_name_km,
    u.last_name_km,
    COUNT(DISTINCT va.id) as assignments_count,
    COALESCE(SUM(va.hours_completed), 0) as total_hours,
    COUNT(DISTINCT va.project_id) as projects_involved,
    COUNT(DISTINCT va.event_id) as events_involved,
    MAX(va.created_at) as last_assignment_date
FROM users u
JOIN volunteer_assignments va ON u.id = va.volunteer_id
WHERE va.status IN ('active', 'completed')
GROUP BY u.id, u.first_name, u.last_name, u.first_name_km, u.last_name_km
ORDER BY total_hours DESC, assignments_count DESC;

-- Sponsor impact statistics
CREATE MATERIALIZED VIEW IF NOT EXISTS sponsor_impact_stats AS
SELECT 
    s.id,
    s.name,
    s.name_km,
    st.name as tier_name,
    s.total_contribution,
    COUNT(DISTINCT sc.project_id) as projects_supported,
    COUNT(DISTINCT sc.event_id) as events_supported,
    COALESCE(SUM(p.beneficiaries_reached), 0) as beneficiaries_impacted,
    s.partnership_start_date,
    EXTRACT(DAYS FROM NOW() - s.partnership_start_date) as partnership_days
FROM sponsors s
LEFT JOIN sponsor_tiers st ON s.tier_id = st.id
LEFT JOIN sponsor_contributions sc ON s.id = sc.sponsor_id
LEFT JOIN projects p ON sc.project_id = p.id
WHERE s.status = 'active'
GROUP BY s.id, s.name, s.name_km, st.name, s.total_contribution, s.partnership_start_date
ORDER BY s.total_contribution DESC;

-- Create indexes on materialized views
CREATE INDEX IF NOT EXISTS idx_dashboard_stats_last_updated ON dashboard_stats(last_updated);
CREATE INDEX IF NOT EXISTS idx_project_stats_category ON project_stats_by_category(category_name);
CREATE INDEX IF NOT EXISTS idx_monthly_activity_month ON monthly_activity_stats(month);
CREATE INDEX IF NOT EXISTS idx_top_content_views ON top_content_stats(views_count DESC);
CREATE INDEX IF NOT EXISTS idx_volunteer_engagement_hours ON volunteer_engagement_stats(total_hours DESC);
CREATE INDEX IF NOT EXISTS idx_sponsor_impact_contribution ON sponsor_impact_stats(total_contribution DESC);

-- Function to refresh all materialized views
CREATE OR REPLACE FUNCTION refresh_dashboard_views()
RETURNS void AS $$
BEGIN
    REFRESH MATERIALIZED VIEW dashboard_stats;
    REFRESH MATERIALIZED VIEW project_stats_by_category;
    REFRESH MATERIALIZED VIEW monthly_activity_stats;
    REFRESH MATERIALIZED VIEW top_content_stats;
    REFRESH MATERIALIZED VIEW volunteer_engagement_stats;
    REFRESH MATERIALIZED VIEW sponsor_impact_stats;
END;
$$ LANGUAGE plpgsql;

-- Schedule automatic refresh (requires pg_cron extension)
-- SELECT cron.schedule('refresh-dashboard-views', '0 */6 * * *', 'SELECT refresh_dashboard_views();');