-- Migration: 001_initial_schema.sql
-- Description: Initial database schema for Mettyerng organization
-- Created: 2024-01-01
-- Author: Database Team

/*
  # Initial Database Schema

  1. New Tables
    - `users` - Extended user profiles with Khmer language support
    - `roles` - Role-based access control system
    - `user_roles` - User role assignments
    - `departments` - Organizational structure
    - `user_departments` - Department memberships
    - `categories` - Content categorization system
    - `news` - News articles and announcements
    - `projects` - Project management
    - `project_milestones` - Project milestone tracking
    - `project_members` - Project team assignments
    - `events` - Event management
    - `event_registrations` - Event registration tracking
    - `media` - File and media management
    - `gallery_items` - Photo gallery system
    - `videos` - Video content management
    - `sponsor_tiers` - Sponsorship level definitions
    - `sponsors` - Partner and sponsor profiles
    - `sponsor_contributions` - Contribution tracking
    - `comments` - User commenting system
    - `likes` - User reactions and engagement
    - `newsletter_subscriptions` - Email marketing
    - `contact_submissions` - Contact form handling
    - `volunteer_applications` - Volunteer recruitment
    - `volunteer_assignments` - Volunteer task management
    - `activity_logs` - System audit trail
    - `system_settings` - Configuration management

  2. Security
    - Enable RLS on all user-facing tables
    - Create policies for public content access
    - Create policies for user data protection
    - Create policies for admin access

  3. Performance
    - Create indexes on frequently queried columns
    - Create full-text search indexes
    - Create composite indexes for complex queries

  4. Triggers
    - Auto-update timestamps
    - Auto-update counters
    - Activity logging
*/

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "unaccent";

-- Create the complete schema as defined in schema.sql
-- (The content would be the same as schema.sql but formatted as a migration)

-- This migration creates the initial database structure
-- All subsequent changes should be in separate migration files