import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jccdnybgeglyqjqjiudc.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjY2RueWJnZWdseXFqcWppdWRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MTUyNzQsImV4cCI6MjA3MzQ5MTI3NH0.W_g-X_aFGGc-22Ea3wdE4RBa2eOy_wJKjxAIrLsbDAg";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
