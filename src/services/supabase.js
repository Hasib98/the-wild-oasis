import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fprhxsztmcbrvqzeztxa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwcmh4c3p0bWNicnZxemV6dHhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MTgzMzUsImV4cCI6MjA2MjE5NDMzNX0.xsw-vYK7XOVsuIxuNws0mm8xIQ48hreZAyQn6T93BMI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
