import { createClient } from '@supabase/supabase-js';

const URL = 'https://qhsyxelbxhvinxbfhanc.supabase.co';


const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoc3l4ZWxieGh2aW54YmZoYW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2MzgxMzYsImV4cCI6MjAwNzIxNDEzNn0.9H3bsKeokHrDPEnKLnNQ9iXsU3UuYo8t9cVu4cqvYRo';

export const supabase = createClient(URL, API_KEY);