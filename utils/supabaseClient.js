const supabaseClient=require('@supabase/supabase-js')
const supabaseUrl = process.env.PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.PUBLIC_SUPABASE_ANON

module.exports = supabaseClient.createClient(supabaseUrl, supabaseAnonKey)