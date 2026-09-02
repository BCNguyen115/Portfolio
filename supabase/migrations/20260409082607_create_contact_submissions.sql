/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key, auto-generated)
      - `name` (text, required) - Sender's full name
      - `email` (text, required) - Sender's email address
      - `subject` (text, required) - Message subject
      - `message` (text, required) - Message body
      - `created_at` (timestamptz, default now()) - Submission timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy to allow anyone (anonymous) to INSERT new submissions (public contact form)
    - No SELECT policy for public — only service role / admin can read submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(name) > 0
    AND length(email) > 0
    AND length(message) > 0
  );
