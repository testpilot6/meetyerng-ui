-- Seed Data for Mettyerng Organization Database
-- Initial data to populate the system

-- =============================================
-- SYSTEM ROLES
-- =============================================

INSERT INTO roles (name, name_km, description, description_km, permissions, is_system_role) VALUES
('super_admin', 'អ្នកគ្រប់គ្រងកំពូល', 'Full system access', 'សិទ្ធិគ្រប់គ្រងពេញលេញ', '{"all": true}', true),
('admin', 'អ្នកគ្រប់គ្រង', 'Administrative access', 'សិទ្ធិគ្រប់គ្រង', '{"manage_users": true, "manage_content": true, "manage_projects": true}', true),
('editor', 'អ្នកកែសម្រួល', 'Content management', 'គ្រប់គ្រងមាតិកា', '{"create_content": true, "edit_content": true, "publish_content": true}', true),
('project_manager', 'អ្នកគ្រប់គ្រងគម្រោង', 'Project management', 'គ្រប់គ្រងគម្រោង', '{"manage_projects": true, "manage_volunteers": true}', true),
('volunteer', 'ស្ម័គ្រចិត្ត', 'Volunteer access', 'សិទ្ធិស្ម័គ្រចិត្ត', '{"view_projects": true, "register_events": true}', true),
('member', 'សមាជិក', 'Basic member access', 'សិទ្ធិសមាជិកធម្មតា', '{"view_content": true, "comment": true}', true);

-- =============================================
-- DEPARTMENTS
-- =============================================

INSERT INTO departments (name, name_km, description, description_km, color_code, icon, display_order) VALUES
('Executive Committee', 'គណៈកម្មការប្រតិបត្តិ', 'Leadership and strategic direction', 'ការដឹកនាំ និងទិសដៅយុទ្ធសាស្ត្រ', '#D4AF37', 'Crown', 1),
('Advisory Committee', 'គណៈកម្មការប្រឹក្សា', 'Strategic guidance and oversight', 'ការណែនាំយុទ្ធសាស្ត្រ និងការត្រួតពិនិត្យ', '#C41E3A', 'Shield', 2),
('Education Department', 'ផ្នែកការអប់រំ', 'Educational programs and initiatives', 'កម្មវិធីអប់រំ និងគំនិតផ្តួចផ្តើម', '#1E40AF', 'BookOpen', 3),
('Culture Department', 'ផ្នែកវប្បធម៌', 'Cultural preservation and promotion', 'ការអភិរក្ស និងលើកកម្ពស់វប្បធម៌', '#059669', 'Palette', 4),
('Community Outreach', 'ផ្នែកទំនាក់ទំនងសហគមន៍', 'Community engagement and services', 'ការចូលរួម និងសេវាកម្មសហគមន៍', '#7C3AED', 'Users', 5),
('Media & Communications', 'ផ្នែកប្រព័ន្ធផ្សព្វផ្សាយ', 'Media relations and communications', 'ទំនាក់ទំនងប្រព័ន្ធផ្សព្វផ្សាយ', '#DC2626', 'Megaphone', 6);

-- =============================================
-- CATEGORIES
-- =============================================

-- News categories
INSERT INTO categories (name, name_km, slug, description, description_km, content_type, color_code, display_order) VALUES
('General News', 'ព័ត៌មានទូទៅ', 'general-news', 'General organization news', 'ព័ត៌មានទូទៅរបស់អង្គការ', 'news', '#6B7280', 1),
('Community Service', 'សេវាកម្មសហគមន៍', 'community-service', 'Community service activities', 'សកម្មភាពសេវាកម្មសហគមន៍', 'news', '#10B981', 2),
('Education', 'ការអប់រំ', 'education', 'Educational news and updates', 'ព័ត៌មាន និងការអាប់ដេតអប់រំ', 'news', '#3B82F6', 3),
('Culture', 'វប្បធម៌', 'culture', 'Cultural events and preservation', 'ព្រឹត្តិការណ៍វប្បធម៌ និងការអភិរក្ស', 'news', '#8B5CF6', 4),
('Announcements', 'ប្រកាស', 'announcements', 'Official announcements', 'ប្រកាសផ្លូវការ', 'news', '#F59E0B', 5);

-- Project categories
INSERT INTO categories (name, name_km, slug, description, description_km, content_type, color_code, display_order) VALUES
('Community Development', 'អភិវឌ្ឍន៍សហគមន៍', 'community-development', 'Community development projects', 'គម្រោងអភិវឌ្ឍន៍សហគមន៍', 'project', '#10B981', 1),
('Education Support', 'ការគាំទ្រការអប់រំ', 'education-support', 'Educational support projects', 'គម្រោងគាំទ្រការអប់រំ', 'project', '#3B82F6', 2),
('Cultural Preservation', 'ការអភិរក្សវប្បធម៌', 'cultural-preservation', 'Cultural preservation initiatives', 'គំនិតផ្តួចផ្តើមអភិរក្សវប្បធម៌', 'project', '#8B5CF6', 3),
('Healthcare', 'សុខភាព', 'healthcare', 'Healthcare and wellness projects', 'គម្រោងសុខភាព និងសុខុមាលភាព', 'project', '#EF4444', 4),
('Youth Development', 'អភិវឌ្ឍន៍យុវជន', 'youth-development', 'Youth development programs', 'កម្មវិធីអភិវឌ្ឍន៍យុវជន', 'project', '#F59E0B', 5);

-- Event categories
INSERT INTO categories (name, name_km, slug, description, description_km, content_type, color_code, display_order) VALUES
('Workshop', 'វគ្គបណ្តុះបណ្តាល', 'workshop', 'Educational workshops', 'វគ្គបណ្តុះបណ្តាលអប់រំ', 'event', '#3B82F6', 1),
('Community Event', 'ព្រឹត្តិការណ៍សហគមន៍', 'community-event', 'Community gatherings and events', 'ការជួបជុំ និងព្រឹត្តិការណ៍សហគមន៍', 'event', '#10B981', 2),
('Cultural Event', 'ព្រឹត្តិការណ៍វប្បធម៌', 'cultural-event', 'Cultural celebrations and events', 'ការប្រារព្ធ និងព្រឹត្តិការណ៍វប្បធម៌', 'event', '#8B5CF6', 3),
('Fundraising', 'ការរៃអង្គាស', 'fundraising', 'Fundraising events', 'ព្រឹត្តិការណ៍រៃអង្គាស', 'event', '#F59E0B', 4),
('Volunteer Training', 'បណ្តុះបណ្តាលស្ម័គ្រចិត្ត', 'volunteer-training', 'Volunteer training sessions', 'វគ្គបណ្តុះបណ្តាលស្ម័គ្រចិត្ត', 'event', '#6366F1', 5);

-- Gallery categories
INSERT INTO categories (name, name_km, slug, description, description_km, content_type, color_code, display_order) VALUES
('Project Photos', 'រូបភាពគម្រោង', 'project-photos', 'Photos from various projects', 'រូបភាពពីគម្រោងផ្សេងៗ', 'gallery', '#10B981', 1),
('Event Photos', 'រូបភាពព្រឹត្តិការណ៍', 'event-photos', 'Photos from events', 'រូបភាពពីព្រឹត្តិការណ៍', 'gallery', '#3B82F6', 2),
('Team Photos', 'រូបភាពក្រុម', 'team-photos', 'Team and member photos', 'រូបភាពក្រុម និងសមាជិក', 'gallery', '#8B5CF6', 3),
('Behind the Scenes', 'ពីក្រោយឆាក', 'behind-scenes', 'Behind the scenes moments', 'ពេលវេលាពីក្រោយឆាក', 'gallery', '#F59E0B', 4);

-- =============================================
-- SPONSOR TIERS
-- =============================================

INSERT INTO sponsor_tiers (name, name_km, description, description_km, min_amount, max_amount, benefits, benefits_km, color_code, display_order) VALUES
('Platinum Partner', 'ដៃគូប្លាទីន', 'Highest level partnership', 'ដៃគូកម្រិតខ្ពស់បំផុត', 10000.00, NULL, 
 ARRAY['Logo prominently displayed on all materials', 'Dedicated social media posts', 'Speaking opportunities at events', 'Custom partnership packages', 'Quarterly impact reports'],
 ARRAY['ឡូហ្គោបង្ហាញលើសម្ភារៈទាំងអស់', 'ការផ្សាយតាមប្រព័ន្ធផ្សព្វផ្សាយសង្គម', 'ឱកាសនិយាយក្នុងព្រឹត្តិការណ៍', 'កញ្ចប់ដៃគូតាមតម្រូវការ', 'របាយការណ៍ផលប៉ះពាល់ប្រចាំត្រីមាស'],
 '#E5E7EB', 1),
('Gold Supporter', 'អ្នកគាំទ្រមាស', 'Premium partnership level', 'កម្រិតដៃគូពិសេស', 5000.00, 9999.99,
 ARRAY['Logo on website and event materials', 'Monthly social media mentions', 'Event invitation privileges', 'Impact reports', 'Recognition certificates'],
 ARRAY['ឡូហ្គោលើគេហទំព័រ និងសម្ភារៈព្រឹត្តិការណ៍', 'ការលើកឡើងប្រចាំខែតាមប្រព័ន្ធផ្សព្វផ្សាយសង្គម', 'សិទ្ធិអញ្ជើញចូលរួមព្រឹត្តិការណ៍', 'របាយការណ៍ផលប៉ះពាល់', 'វិញ្ញាបនបត្រទទួលស្គាល់'],
 '#F59E0B', 2),
('Silver Contributor', 'អ្នកចូលរួមប្រាក់', 'Standard partnership level', 'កម្រិតដៃគូស្តង់ដារ', 2500.00, 4999.99,
 ARRAY['Logo on website', 'Social media recognition', 'Event updates', 'Annual impact summary'],
 ARRAY['ឡូហ្គោលើគេហទំព័រ', 'ការទទួលស្គាល់តាមប្រព័ន្ធផ្សព្វផ្សាយសង្គម', 'ការអាប់ដេតព្រឹត្តិការណ៍', 'សេចក្តីសង្ខេបផលប៉ះពាល់ប្រចាំឆ្នាំ'],
 '#6B7280', 3),
('Bronze Friend', 'មិត្តភក្តិស្ពាន់ដែង', 'Basic partnership level', 'កម្រិតដៃគូមូលដ្ឋាន', 1000.00, 2499.99,
 ARRAY['Name recognition on website', 'Thank you mentions', 'Newsletter updates'],
 ARRAY['ការទទួលស្គាល់ឈ្មោះលើគេហទំព័រ', 'ការលើកឡើងអរគុណ', 'ការអាប់ដេតព្រឹត្តិបត្រព័ត៌មាន'],
 '#CD7F32', 4);

-- =============================================
-- SYSTEM SETTINGS
-- =============================================

INSERT INTO system_settings (key, value, description, is_public) VALUES
('site_name', '"Mettyerng"', 'Organization name', true),
('site_description', '"ក្រុមអ្នកស្រឡាញ់សង្គម - Khmer community organization dedicated to education, culture, and social development"', 'Site description', true),
('contact_email', '"info@mettyerng.org"', 'Main contact email', true),
('contact_phone', '"+855 12 345 678"', 'Main contact phone', true),
('address', '"Phnom Penh, Cambodia"', 'Organization address', true),
('social_facebook', '"https://facebook.com/mettyerng"', 'Facebook page URL', true),
('social_youtube', '"https://youtube.com/mettyerng"', 'YouTube channel URL', true),
('social_instagram', '"https://instagram.com/mettyerng"', 'Instagram profile URL', true),
('organization_founded', '"2018"', 'Year organization was founded', true),
('member_count', '150', 'Current member count', true),
('project_count', '25', 'Total projects completed', true),
('beneficiary_count', '1000', 'Total beneficiaries helped', true),
('volunteer_count', '50', 'Active volunteer count', true);

-- =============================================
-- SAMPLE CONTENT
-- =============================================

-- Sample news articles
INSERT INTO news (title, title_km, slug, excerpt, excerpt_km, content, content_km, category_id, author_id, status, is_featured, published_at, tags) VALUES
('Free Haircut Project Reaches 500 Beneficiaries', 'គម្រោងកាត់សក់ដោយឥតគិតថ្លៃ ជួយប្រជាជន 500 នាក់', 'free-haircut-500-beneficiaries', 
 'Our community haircut project has successfully served 500 community members in need.', 
 'គម្រោងកាត់សក់សហគមន៍របស់យើងបានជួយប្រជាជនដែលមានតម្រូវការចំនួន 500 នាក់ដោយជោគជ័យ។',
 'The Mettyerng organization is proud to announce that our free haircut project has reached a significant milestone...', 
 'អង្គការ Mettyerng មានមោទនភាពក្នុងការប្រកាសថា គម្រោងកាត់សក់ដោយឥតគិតថ្លៃរបស់យើងបានឈានដល់ចំណុចសំខាន់...',
 (SELECT id FROM categories WHERE slug = 'community-service' AND content_type = 'news'),
 NULL, 'published', true, NOW() - INTERVAL '7 days',
 ARRAY['community service', 'haircut', 'milestone', 'social impact']);

-- Sample projects
INSERT INTO projects (title, title_km, slug, description, description_km, long_description, long_description_km, 
                     category_id, status, start_date, end_date, location, location_km, budget_allocated, budget_used,
                     beneficiaries_target, beneficiaries_reached, volunteers_needed, volunteers_registered,
                     is_featured, objectives, objectives_km, achievements, achievements_km, tags) VALUES
('Free Haircut for Community', 'កាត់សក់ដោយឥតគិតថ្លៃសម្រាប់សហគមន៍', 'free-haircut-community',
 'Providing free haircut services to underprivileged community members',
 'ផ្តល់សេវាកាត់សក់ដោយឥតគិតថ្លៃដល់សមាជិកសហគមន៍ដែលមានស្ថានភាពពិបាក',
 'This project aims to provide dignity and confidence to community members through free professional haircut services...',
 'គម្រោងនេះមានគោលបំណងផ្តល់សេចក្តីថ្លៃថ្នូរ និងទំនុកចិត្តដល់សមាជិកសហគមន៍តាមរយៈសេវាកាត់សក់ដោយឥតគិតថ្លៃ...',
 (SELECT id FROM categories WHERE slug = 'community-development' AND content_type = 'project'),
 'active', '2021-01-15', '2024-12-31', 'Phnom Penh', 'ភ្នំពេញ',
 50000.00, 35000.00, 1000, 500, 20, 15, true,
 ARRAY['Provide free haircut services', 'Build community confidence', 'Support underprivileged families'],
 ARRAY['ផ្តល់សេវាកាត់សក់ដោយឥតគិតថ្លៃ', 'កសាងទំនុកចិត្តសហគមន៍', 'គាំទ្រគ្រួសារក្រីក្រ'],
 ARRAY['Served 500 community members', 'Created 15 volunteer positions', 'Received community recognition'],
 ARRAY['បានជួយសមាជិកសហគមន៍ 500 នាក់', 'បានបង្កើតតួនាទីស្ម័គ្រចិត្ត 15 កន្លែង', 'បានទទួលការទទួលស្គាល់ពីសហគមន៍'],
 ARRAY['community service', 'haircut', 'social impact', 'volunteer']);

-- Sample events
INSERT INTO events (title, title_km, slug, description, description_km, category_id, organizer_id, event_type,
                   start_datetime, end_datetime, location, location_km, max_participants, is_featured, tags) VALUES
('Community Health Workshop', 'វគ្គបណ្តុះបណ្តាលសុខភាពសហគមន៍', 'community-health-workshop',
 'Educational workshop on community health and wellness practices',
 'វគ្គបណ្តុះបណ្តាលអប់រំអំពីការអនុវត្តសុខភាព និងសុខុមាលភាពសហគមន៍',
 (SELECT id FROM categories WHERE slug = 'workshop' AND content_type = 'event'),
 NULL, 'workshop',
 NOW() + INTERVAL '30 days', NOW() + INTERVAL '30 days' + INTERVAL '4 hours',
 'Community Center, Phnom Penh', 'មជ្ឈមណ្ឌលសហគមន៍ ភ្នំពេញ',
 100, true,
 ARRAY['health', 'workshop', 'community', 'education']);