-- Mettyerng Organization Database Schema
-- PostgreSQL ERD Implementation with Best Practices

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "unaccent";

-- =============================================
-- CORE SYSTEM TABLES
-- =============================================

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    auth_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    first_name_km VARCHAR(100),
    last_name_km VARCHAR(100),
    phone VARCHAR(20),
    date_of_birth DATE,
    gender VARCHAR(10) CHECK (gender IN ('male', 'female', 'other')),
    profile_image_url TEXT,
    bio TEXT,
    bio_km TEXT,
    address TEXT,
    address_km TEXT,
    city VARCHAR(100),
    province VARCHAR(100),
    country VARCHAR(100) DEFAULT 'Cambodia',
    is_active BOOLEAN DEFAULT true,
    email_verified BOOLEAN DEFAULT false,
    last_login_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Roles and permissions system
CREATE TABLE IF NOT EXISTS roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) UNIQUE NOT NULL,
    name_km VARCHAR(100),
    description TEXT,
    description_km TEXT,
    permissions JSONB DEFAULT '{}',
    is_system_role BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User roles junction table
CREATE TABLE IF NOT EXISTS user_roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    role_id UUID REFERENCES roles(id) ON DELETE CASCADE,
    assigned_by UUID REFERENCES users(id),
    assigned_at TIMESTAMPTZ DEFAULT NOW(),
    expires_at TIMESTAMPTZ,
    is_active BOOLEAN DEFAULT true,
    UNIQUE(user_id, role_id)
);

-- =============================================
-- ORGANIZATION STRUCTURE
-- =============================================

-- Departments/Sections
CREATE TABLE IF NOT EXISTS departments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    name_km VARCHAR(200),
    description TEXT,
    description_km TEXT,
    parent_department_id UUID REFERENCES departments(id),
    department_head_id UUID REFERENCES users(id),
    color_code VARCHAR(7), -- Hex color
    icon VARCHAR(50),
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User department memberships
CREATE TABLE IF NOT EXISTS user_departments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    department_id UUID REFERENCES departments(id) ON DELETE CASCADE,
    position VARCHAR(100),
    position_km VARCHAR(200),
    start_date DATE DEFAULT CURRENT_DATE,
    end_date DATE,
    is_primary BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- CONTENT MANAGEMENT
-- =============================================

-- Categories for content organization
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    name_km VARCHAR(200),
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    description_km TEXT,
    parent_category_id UUID REFERENCES categories(id),
    color_code VARCHAR(7),
    icon VARCHAR(50),
    content_type VARCHAR(50) NOT NULL, -- 'news', 'project', 'event', 'gallery'
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- News and articles
CREATE TABLE IF NOT EXISTS news (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    title_km VARCHAR(500),
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT,
    excerpt_km TEXT,
    content TEXT NOT NULL,
    content_km TEXT,
    featured_image_url TEXT,
    category_id UUID REFERENCES categories(id),
    author_id UUID REFERENCES users(id) NOT NULL,
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    is_featured BOOLEAN DEFAULT false,
    published_at TIMESTAMPTZ,
    views_count INTEGER DEFAULT 0,
    likes_count INTEGER DEFAULT 0,
    comments_count INTEGER DEFAULT 0,
    meta_title VARCHAR(255),
    meta_description TEXT,
    tags TEXT[], -- Array of tags
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    title_km VARCHAR(500),
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    description_km TEXT,
    long_description TEXT,
    long_description_km TEXT,
    featured_image_url TEXT,
    category_id UUID REFERENCES categories(id),
    project_manager_id UUID REFERENCES users(id),
    status VARCHAR(20) DEFAULT 'planning' CHECK (status IN ('planning', 'active', 'completed', 'cancelled', 'on_hold')),
    priority VARCHAR(10) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    start_date DATE,
    end_date DATE,
    actual_end_date DATE,
    location VARCHAR(255),
    location_km VARCHAR(500),
    budget_allocated DECIMAL(12,2),
    budget_used DECIMAL(12,2) DEFAULT 0,
    beneficiaries_target INTEGER,
    beneficiaries_reached INTEGER DEFAULT 0,
    volunteers_needed INTEGER,
    volunteers_registered INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT false,
    views_count INTEGER DEFAULT 0,
    likes_count INTEGER DEFAULT 0,
    objectives TEXT[],
    objectives_km TEXT[],
    achievements TEXT[],
    achievements_km TEXT[],
    tags TEXT[],
    meta_title VARCHAR(255),
    meta_description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Project milestones
CREATE TABLE IF NOT EXISTS project_milestones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    title_km VARCHAR(500),
    description TEXT,
    description_km TEXT,
    due_date DATE,
    completed_date DATE,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'cancelled')),
    completion_percentage INTEGER DEFAULT 0 CHECK (completion_percentage >= 0 AND completion_percentage <= 100),
    assigned_to UUID REFERENCES users(id),
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Project team members
CREATE TABLE IF NOT EXISTS project_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(100),
    role_km VARCHAR(200),
    responsibilities TEXT,
    responsibilities_km TEXT,
    joined_at TIMESTAMPTZ DEFAULT NOW(),
    left_at TIMESTAMPTZ,
    is_active BOOLEAN DEFAULT true,
    UNIQUE(project_id, user_id)
);

-- Events
CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    title_km VARCHAR(500),
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    description_km TEXT,
    featured_image_url TEXT,
    category_id UUID REFERENCES categories(id),
    organizer_id UUID REFERENCES users(id) NOT NULL,
    event_type VARCHAR(50) DEFAULT 'general', -- 'workshop', 'seminar', 'community', 'fundraising'
    status VARCHAR(20) DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'ongoing', 'completed', 'cancelled')),
    start_datetime TIMESTAMPTZ NOT NULL,
    end_datetime TIMESTAMPTZ NOT NULL,
    location VARCHAR(255),
    location_km VARCHAR(500),
    venue_details TEXT,
    venue_details_km TEXT,
    max_participants INTEGER,
    registered_participants INTEGER DEFAULT 0,
    registration_fee DECIMAL(10,2) DEFAULT 0,
    is_registration_required BOOLEAN DEFAULT false,
    registration_deadline TIMESTAMPTZ,
    is_featured BOOLEAN DEFAULT false,
    views_count INTEGER DEFAULT 0,
    tags TEXT[],
    meta_title VARCHAR(255),
    meta_description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Event registrations
CREATE TABLE IF NOT EXISTS event_registrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID REFERENCES events(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    registration_status VARCHAR(20) DEFAULT 'registered' CHECK (registration_status IN ('registered', 'confirmed', 'attended', 'cancelled', 'no_show')),
    registration_date TIMESTAMPTZ DEFAULT NOW(),
    payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded', 'waived')),
    payment_amount DECIMAL(10,2),
    special_requirements TEXT,
    notes TEXT,
    UNIQUE(event_id, user_id)
);

-- =============================================
-- MEDIA AND CONTENT
-- =============================================

-- Media files (images, videos, documents)
CREATE TABLE IF NOT EXISTS media (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    filename VARCHAR(255) NOT NULL,
    original_filename VARCHAR(255) NOT NULL,
    file_path TEXT NOT NULL,
    file_url TEXT NOT NULL,
    file_type VARCHAR(50) NOT NULL, -- 'image', 'video', 'document', 'audio'
    mime_type VARCHAR(100) NOT NULL,
    file_size BIGINT NOT NULL, -- in bytes
    width INTEGER, -- for images/videos
    height INTEGER, -- for images/videos
    duration INTEGER, -- for videos/audio in seconds
    alt_text VARCHAR(255),
    alt_text_km VARCHAR(500),
    caption TEXT,
    caption_km TEXT,
    uploaded_by UUID REFERENCES users(id),
    is_public BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Gallery items
CREATE TABLE IF NOT EXISTS gallery_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255),
    title_km VARCHAR(500),
    description TEXT,
    description_km TEXT,
    media_id UUID REFERENCES media(id) ON DELETE CASCADE,
    category_id UUID REFERENCES categories(id),
    event_id UUID REFERENCES events(id),
    project_id UUID REFERENCES projects(id),
    photographer VARCHAR(100),
    taken_at TIMESTAMPTZ,
    location VARCHAR(255),
    location_km VARCHAR(500),
    is_featured BOOLEAN DEFAULT false,
    views_count INTEGER DEFAULT 0,
    likes_count INTEGER DEFAULT 0,
    tags TEXT[],
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Videos
CREATE TABLE IF NOT EXISTS videos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    title_km VARCHAR(500),
    description TEXT,
    description_km TEXT,
    thumbnail_media_id UUID REFERENCES media(id),
    video_media_id UUID REFERENCES media(id),
    youtube_id VARCHAR(50), -- For YouTube videos
    vimeo_id VARCHAR(50), -- For Vimeo videos
    duration INTEGER, -- in seconds
    category_id UUID REFERENCES categories(id),
    project_id UUID REFERENCES projects(id),
    event_id UUID REFERENCES events(id),
    uploaded_by UUID REFERENCES users(id),
    status VARCHAR(20) DEFAULT 'published' CHECK (status IN ('draft', 'published', 'private', 'archived')),
    is_featured BOOLEAN DEFAULT false,
    views_count INTEGER DEFAULT 0,
    likes_count INTEGER DEFAULT 0,
    tags TEXT[],
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- PARTNERSHIPS AND SPONSORS
-- =============================================

-- Sponsor tiers
CREATE TABLE IF NOT EXISTS sponsor_tiers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    name_km VARCHAR(200),
    description TEXT,
    description_km TEXT,
    min_amount DECIMAL(12,2) NOT NULL,
    max_amount DECIMAL(12,2),
    benefits TEXT[],
    benefits_km TEXT[],
    color_code VARCHAR(7),
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sponsors/Partners
CREATE TABLE IF NOT EXISTS sponsors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    name_km VARCHAR(500),
    description TEXT,
    description_km TEXT,
    logo_media_id UUID REFERENCES media(id),
    website_url TEXT,
    contact_email VARCHAR(255),
    contact_phone VARCHAR(20),
    contact_person VARCHAR(100),
    contact_person_km VARCHAR(200),
    tier_id UUID REFERENCES sponsor_tiers(id),
    partnership_start_date DATE,
    partnership_end_date DATE,
    total_contribution DECIMAL(12,2) DEFAULT 0,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'pending', 'expired')),
    is_featured BOOLEAN DEFAULT false,
    contribution_focus TEXT[], -- Areas they support
    projects_supported INTEGER DEFAULT 0,
    beneficiaries_impacted INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sponsor contributions
CREATE TABLE IF NOT EXISTS sponsor_contributions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sponsor_id UUID REFERENCES sponsors(id) ON DELETE CASCADE,
    project_id UUID REFERENCES projects(id),
    event_id UUID REFERENCES events(id),
    contribution_type VARCHAR(50) NOT NULL, -- 'monetary', 'in_kind', 'service'
    amount DECIMAL(12,2),
    description TEXT,
    description_km TEXT,
    contribution_date DATE DEFAULT CURRENT_DATE,
    receipt_number VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- ENGAGEMENT AND INTERACTION
-- =============================================

-- Comments system
CREATE TABLE IF NOT EXISTS comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    content TEXT NOT NULL,
    author_id UUID REFERENCES users(id) ON DELETE CASCADE,
    parent_comment_id UUID REFERENCES comments(id), -- For nested comments
    commentable_type VARCHAR(50) NOT NULL, -- 'news', 'project', 'event', 'video'
    commentable_id UUID NOT NULL,
    status VARCHAR(20) DEFAULT 'published' CHECK (status IN ('pending', 'published', 'hidden', 'deleted')),
    likes_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Likes/reactions system
CREATE TABLE IF NOT EXISTS likes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    likeable_type VARCHAR(50) NOT NULL, -- 'news', 'project', 'event', 'video', 'comment'
    likeable_id UUID NOT NULL,
    reaction_type VARCHAR(20) DEFAULT 'like' CHECK (reaction_type IN ('like', 'love', 'support', 'celebrate')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, likeable_type, likeable_id)
);

-- Newsletter subscriptions
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    preferences JSONB DEFAULT '{}', -- Subscription preferences
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
    subscribed_at TIMESTAMPTZ DEFAULT NOW(),
    unsubscribed_at TIMESTAMPTZ,
    verification_token VARCHAR(255),
    verified_at TIMESTAMPTZ
);

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    department VARCHAR(100),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
    assigned_to UUID REFERENCES users(id),
    response TEXT,
    responded_at TIMESTAMPTZ,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- VOLUNTEER MANAGEMENT
-- =============================================

-- Volunteer applications
CREATE TABLE IF NOT EXISTS volunteer_applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    date_of_birth DATE,
    address TEXT,
    emergency_contact_name VARCHAR(100),
    emergency_contact_phone VARCHAR(20),
    skills TEXT[],
    interests TEXT[],
    availability TEXT,
    motivation TEXT,
    experience TEXT,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'withdrawn')),
    reviewed_by UUID REFERENCES users(id),
    reviewed_at TIMESTAMPTZ,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Volunteer assignments
CREATE TABLE IF NOT EXISTS volunteer_assignments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    volunteer_id UUID REFERENCES users(id) ON DELETE CASCADE,
    project_id UUID REFERENCES projects(id),
    event_id UUID REFERENCES events(id),
    role VARCHAR(100),
    role_km VARCHAR(200),
    description TEXT,
    description_km TEXT,
    start_date DATE,
    end_date DATE,
    hours_committed INTEGER,
    hours_completed INTEGER DEFAULT 0,
    status VARCHAR(20) DEFAULT 'assigned' CHECK (status IN ('assigned', 'active', 'completed', 'cancelled')),
    supervisor_id UUID REFERENCES users(id),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- SYSTEM AND AUDIT
-- =============================================

-- Activity logs
CREATE TABLE IF NOT EXISTS activity_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id UUID NOT NULL,
    old_values JSONB,
    new_values JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- System settings
CREATE TABLE IF NOT EXISTS system_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key VARCHAR(100) UNIQUE NOT NULL,
    value JSONB NOT NULL,
    description TEXT,
    is_public BOOLEAN DEFAULT false,
    updated_by UUID REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- INDEXES FOR PERFORMANCE
-- =============================================

-- Users indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_auth_user_id ON users(auth_user_id);
CREATE INDEX IF NOT EXISTS idx_users_active ON users(is_active);
CREATE INDEX IF NOT EXISTS idx_users_name ON users(first_name, last_name);

-- Content indexes
CREATE INDEX IF NOT EXISTS idx_news_status_published ON news(status, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_news_category ON news(category_id);
CREATE INDEX IF NOT EXISTS idx_news_author ON news(author_id);
CREATE INDEX IF NOT EXISTS idx_news_featured ON news(is_featured);
CREATE INDEX IF NOT EXISTS idx_news_slug ON news(slug);

CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category_id);
CREATE INDEX IF NOT EXISTS idx_projects_manager ON projects(project_manager_id);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(is_featured);
CREATE INDEX IF NOT EXISTS idx_projects_dates ON projects(start_date, end_date);

CREATE INDEX IF NOT EXISTS idx_events_datetime ON events(start_datetime, end_datetime);
CREATE INDEX IF NOT EXISTS idx_events_status ON events(status);
CREATE INDEX IF NOT EXISTS idx_events_category ON events(category_id);
CREATE INDEX IF NOT EXISTS idx_events_featured ON events(is_featured);

-- Media and gallery indexes
CREATE INDEX IF NOT EXISTS idx_media_type ON media(file_type);
CREATE INDEX IF NOT EXISTS idx_media_public ON media(is_public);
CREATE INDEX IF NOT EXISTS idx_gallery_featured ON gallery_items(is_featured);
CREATE INDEX IF NOT EXISTS idx_gallery_category ON gallery_items(category_id);

-- Full-text search indexes
CREATE INDEX IF NOT EXISTS idx_news_search ON news USING gin(to_tsvector('english', title || ' ' || COALESCE(content, '')));
CREATE INDEX IF NOT EXISTS idx_projects_search ON projects USING gin(to_tsvector('english', title || ' ' || COALESCE(description, '')));
CREATE INDEX IF NOT EXISTS idx_events_search ON events USING gin(to_tsvector('english', title || ' ' || COALESCE(description, '')));

-- =============================================
-- TRIGGERS FOR AUTOMATIC UPDATES
-- =============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers to relevant tables
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_sponsors_updated_at BEFORE UPDATE ON sponsors FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to update counters
CREATE OR REPLACE FUNCTION update_content_counters()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_TABLE_NAME = 'comments' THEN
        IF TG_OP = 'INSERT' THEN
            CASE NEW.commentable_type
                WHEN 'news' THEN
                    UPDATE news SET comments_count = comments_count + 1 WHERE id = NEW.commentable_id;
                WHEN 'project' THEN
                    UPDATE projects SET comments_count = COALESCE(comments_count, 0) + 1 WHERE id = NEW.commentable_id;
            END CASE;
        ELSIF TG_OP = 'DELETE' THEN
            CASE OLD.commentable_type
                WHEN 'news' THEN
                    UPDATE news SET comments_count = GREATEST(comments_count - 1, 0) WHERE id = OLD.commentable_id;
                WHEN 'project' THEN
                    UPDATE projects SET comments_count = GREATEST(COALESCE(comments_count, 0) - 1, 0) WHERE id = OLD.commentable_id;
            END CASE;
        END IF;
    END IF;
    
    IF TG_TABLE_NAME = 'likes' THEN
        IF TG_OP = 'INSERT' THEN
            CASE NEW.likeable_type
                WHEN 'news' THEN
                    UPDATE news SET likes_count = likes_count + 1 WHERE id = NEW.likeable_id;
                WHEN 'project' THEN
                    UPDATE projects SET likes_count = COALESCE(likes_count, 0) + 1 WHERE id = NEW.likeable_id;
            END CASE;
        ELSIF TG_OP = 'DELETE' THEN
            CASE OLD.likeable_type
                WHEN 'news' THEN
                    UPDATE news SET likes_count = GREATEST(likes_count - 1, 0) WHERE id = OLD.likeable_id;
                WHEN 'project' THEN
                    UPDATE projects SET likes_count = GREATEST(COALESCE(likes_count, 0) - 1, 0) WHERE id = OLD.likeable_id;
            END CASE;
        END IF;
    END IF;
    
    RETURN COALESCE(NEW, OLD);
END;
$$ language 'plpgsql';

-- Apply counter triggers
CREATE TRIGGER update_comments_counter AFTER INSERT OR DELETE ON comments FOR EACH ROW EXECUTE FUNCTION update_content_counters();
CREATE TRIGGER update_likes_counter AFTER INSERT OR DELETE ON likes FOR EACH ROW EXECUTE FUNCTION update_content_counters();

-- =============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =============================================

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;

-- Public read policies for published content
CREATE POLICY "Public can view published news" ON news FOR SELECT USING (status = 'published');
CREATE POLICY "Public can view active projects" ON projects FOR SELECT USING (status IN ('active', 'completed'));
CREATE POLICY "Public can view upcoming and ongoing events" ON events FOR SELECT USING (status IN ('upcoming', 'ongoing', 'completed'));
CREATE POLICY "Public can view public media" ON media FOR SELECT USING (is_public = true);
CREATE POLICY "Public can view gallery items" ON gallery_items FOR SELECT USING (true);
CREATE POLICY "Public can view published videos" ON videos FOR SELECT USING (status = 'published');
CREATE POLICY "Public can view active sponsors" ON sponsors FOR SELECT USING (status = 'active');

-- User policies
CREATE POLICY "Users can view their own data" ON users FOR SELECT USING (auth.uid() = auth_user_id);
CREATE POLICY "Users can update their own data" ON users FOR UPDATE USING (auth.uid() = auth_user_id);

-- Comment policies
CREATE POLICY "Anyone can view published comments" ON comments FOR SELECT USING (status = 'published');
CREATE POLICY "Authenticated users can create comments" ON comments FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Users can update their own comments" ON comments FOR UPDATE USING (auth.uid() = (SELECT auth_user_id FROM users WHERE id = author_id));

-- Like policies
CREATE POLICY "Anyone can view likes" ON likes FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage their likes" ON likes FOR ALL USING (auth.uid() = (SELECT auth_user_id FROM users WHERE id = user_id));