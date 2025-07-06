# Mettyerng Organization Database Schema

## Overview
This PostgreSQL database schema is designed for the Mettyerng Khmer community organization website. It follows best practices for scalability, performance, and maintainability.

## Key Features

### 🏗️ **Architecture Principles**
- **Normalized Design**: Proper 3NF normalization to reduce redundancy
- **Scalable Structure**: Designed to handle growth in users, content, and data
- **Performance Optimized**: Strategic indexing and query optimization
- **Security First**: Row Level Security (RLS) implementation
- **Audit Trail**: Complete activity logging and change tracking

### 🔐 **Security Features**
- **Row Level Security (RLS)**: Granular access control
- **Role-Based Access Control (RBAC)**: Flexible permission system
- **Data Encryption**: Sensitive data protection
- **Audit Logging**: Complete activity tracking

### 📊 **Core Entities**

#### **User Management**
- `users` - Extended user profiles with Khmer language support
- `roles` - Flexible role-based permission system
- `user_roles` - User-role assignments with expiration
- `departments` - Organizational structure
- `user_departments` - Department memberships

#### **Content Management**
- `categories` - Hierarchical categorization system
- `news` - News articles and announcements
- `projects` - Project management with milestones
- `events` - Event management with registrations
- `media` - File and media management
- `gallery_items` - Photo gallery system
- `videos` - Video content management

#### **Community Engagement**
- `comments` - Threaded commenting system
- `likes` - Reaction and engagement tracking
- `volunteer_applications` - Volunteer recruitment
- `volunteer_assignments` - Volunteer task management
- `contact_submissions` - Contact form handling
- `newsletter_subscriptions` - Email marketing

#### **Partnership Management**
- `sponsor_tiers` - Sponsorship level definitions
- `sponsors` - Partner and sponsor profiles
- `sponsor_contributions` - Contribution tracking

#### **System Management**
- `activity_logs` - Complete audit trail
- `system_settings` - Configuration management

### 🚀 **Performance Features**

#### **Indexing Strategy**
- **Primary Indexes**: All foreign keys and frequently queried columns
- **Composite Indexes**: Multi-column queries optimization
- **Full-Text Search**: PostgreSQL's built-in search capabilities
- **Partial Indexes**: Conditional indexing for better performance

#### **Query Optimization**
- **Materialized Views**: For complex reporting queries
- **Trigger-Based Counters**: Real-time statistics updates
- **Efficient Joins**: Optimized table relationships

### 🌐 **Internationalization**
- **Bilingual Support**: Khmer and English content fields
- **Unicode Support**: Full UTF-8 character support
- **Cultural Considerations**: Khmer naming conventions

### 📱 **Modern Features**
- **JSONB Fields**: Flexible schema for evolving requirements
- **Array Fields**: Efficient storage for tags and lists
- **UUID Primary Keys**: Distributed system compatibility
- **Timestamp Tracking**: Automatic created/updated timestamps

## Database Tables

### Core System Tables
| Table | Purpose | Key Features |
|-------|---------|--------------|
| `users` | User profiles and authentication | Bilingual names, extended profiles |
| `roles` | Permission management | JSONB permissions, hierarchical |
| `user_roles` | Role assignments | Expiration dates, audit trail |
| `departments` | Organizational structure | Hierarchical, color coding |

### Content Tables
| Table | Purpose | Key Features |
|-------|---------|--------------|
| `news` | News and articles | Bilingual content, SEO fields |
| `projects` | Project management | Milestones, budget tracking |
| `events` | Event management | Registration system, capacity limits |
| `media` | File management | Multiple file types, metadata |

### Engagement Tables
| Table | Purpose | Key Features |
|-------|---------|--------------|
| `comments` | User comments | Threaded, moderation |
| `likes` | User reactions | Multiple reaction types |
| `volunteers` | Volunteer management | Skills tracking, assignments |

## Installation

### Prerequisites
- PostgreSQL 13+ with extensions:
  - `uuid-ossp` - UUID generation
  - `pg_trgm` - Trigram matching for search
  - `unaccent` - Text search without accents

### Setup Steps

1. **Create Database**
   ```sql
   CREATE DATABASE mettyerng_db;
   ```

2. **Run Schema**
   ```bash
   psql -d mettyerng_db -f database/schema.sql
   ```

3. **Load Seed Data**
   ```bash
   psql -d mettyerng_db -f database/seed_data.sql
   ```

## Usage Examples

### User Management
```sql
-- Create a new user
INSERT INTO users (email, first_name, last_name, first_name_km, last_name_km)
VALUES ('user@example.com', 'John', 'Doe', 'ចន', 'ដូ');

-- Assign role to user
INSERT INTO user_roles (user_id, role_id)
VALUES (
  (SELECT id FROM users WHERE email = 'user@example.com'),
  (SELECT id FROM roles WHERE name = 'volunteer')
);
```

### Content Creation
```sql
-- Create a news article
INSERT INTO news (title, title_km, content, content_km, category_id, author_id, status)
VALUES (
  'Community Event Success',
  'ព្រឹត្តិការណ៍សហគមន៍ជោគជ័យ',
  'Our recent community event was a great success...',
  'ព្រឹត្តិការណ៍សហគមន៍ថ្មីៗរបស់យើងទទួលបានជោគជ័យយ៉ាងល្អ...',
  (SELECT id FROM categories WHERE slug = 'community-service'),
  (SELECT id FROM users WHERE email = 'admin@mettyerng.org'),
  'published'
);
```

### Project Management
```sql
-- Create a new project
INSERT INTO projects (title, title_km, description, description_km, category_id, status, start_date)
VALUES (
  'Education Support Program',
  'កម្មវិធីគាំទ្រការអប់រំ',
  'Supporting education in rural communities',
  'គាំទ្រការអប់រំក្នុងសហគមន៍ជនបទ',
  (SELECT id FROM categories WHERE slug = 'education-support'),
  'planning',
  CURRENT_DATE
);
```

## Security Considerations

### Row Level Security (RLS)
- **Public Content**: Published content is publicly readable
- **User Data**: Users can only access their own data
- **Admin Access**: Admins have elevated permissions
- **Content Moderation**: Comments require approval

### Data Protection
- **Sensitive Fields**: Phone numbers, addresses are access-controlled
- **Audit Trail**: All changes are logged with user attribution
- **Soft Deletes**: Important data is marked as deleted, not removed

## Performance Optimization

### Indexing Guidelines
- **Foreign Keys**: All foreign keys are indexed
- **Search Fields**: Title, content fields have full-text indexes
- **Date Ranges**: Date fields are indexed for time-based queries
- **Status Fields**: Enum fields are indexed for filtering

### Query Patterns
```sql
-- Efficient news listing with category
SELECT n.*, c.name as category_name
FROM news n
JOIN categories c ON n.category_id = c.id
WHERE n.status = 'published'
ORDER BY n.published_at DESC
LIMIT 10;

-- Project search with full-text
SELECT *
FROM projects
WHERE to_tsvector('english', title || ' ' || description) @@ plainto_tsquery('education');
```

## Maintenance

### Regular Tasks
- **Statistics Update**: `ANALYZE;` weekly
- **Index Maintenance**: `REINDEX` monthly
- **Backup Strategy**: Daily incremental, weekly full
- **Log Rotation**: Archive old activity logs

### Monitoring
- **Performance**: Query execution times
- **Storage**: Table and index sizes
- **Activity**: User engagement metrics
- **Errors**: Failed operations and constraints

## Migration Strategy

### Version Control
- **Schema Migrations**: Numbered migration files
- **Data Migrations**: Separate data transformation scripts
- **Rollback Plans**: Reverse migration procedures

### Deployment
- **Staging Environment**: Test all changes first
- **Blue-Green Deployment**: Zero-downtime updates
- **Backup Before Migration**: Always backup before changes

## API Integration

### Supabase Integration
- **Authentication**: Integrates with Supabase Auth
- **Real-time**: Supports Supabase real-time subscriptions
- **Storage**: Compatible with Supabase Storage
- **Edge Functions**: Optimized for serverless functions

### GraphQL Support
- **PostGraphile**: Auto-generated GraphQL API
- **Custom Resolvers**: For complex business logic
- **Subscriptions**: Real-time data updates

## Contributing

### Development Guidelines
- **Naming Conventions**: snake_case for tables/columns
- **Documentation**: Comment complex queries and triggers
- **Testing**: Include test data and validation queries
- **Code Review**: All schema changes require review

### Best Practices
- **Normalization**: Follow 3NF principles
- **Constraints**: Use database constraints for data integrity
- **Transactions**: Wrap related operations in transactions
- **Error Handling**: Graceful error handling in triggers

## Support

For questions or issues with the database schema:
- **Documentation**: Check this README first
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub discussions for questions
- **Contact**: Email technical team at tech@mettyerng.org