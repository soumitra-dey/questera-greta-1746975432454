import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mkdnboshjpggutimgnuc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZG5ib3NoanBnZ3V0aW1nbnVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NDMzNjEsImV4cCI6MjA2MjExOTM2MX0.1EQp8SLNHLtp_k5afDvx6BdYQtk41TRlYaIw6hyPkjM';

export const supabase = createClient(supabaseUrl, supabaseKey);