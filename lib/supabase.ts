import { createClient } from "@supabase/supabase-js";
import { Database } from "../src/types/supabase";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;



const resolvedSupabaseUrl =
  supabaseUrl || "https://example.supabase.co";

const resolvedSupabaseAnonKey =
  supabaseAnonKey || "demo-key";
export const supabase = createClient(
  resolvedSupabaseUrl,
  resolvedSupabaseAnonKey,
);
let browserClient: ReturnType<typeof createClient<Database>> | null = null;

export const getSupabaseBrowserClient = () => {
  if (!browserClient) {
    browserClient = createClient<Database>(resolvedSupabaseUrl, resolvedSupabaseAnonKey);
  }
  return browserClient;
};

export const getSupabaseServerClient = () =>
  createClient<Database>(resolvedSupabaseUrl, resolvedSupabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });