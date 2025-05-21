import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://udsuwspcgvnxmivgzvgc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkc3V3c3BjZ3ZueG1pdmd6dmdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1MTI1MDksImV4cCI6MjA2MzA4ODUwOX0.hZjhP0uU9bFlWuwuV_opIMx-p7m1qGJQkZjX78dAXiM'
export const supabase = createClient(supabaseUrl, supabaseKey) 