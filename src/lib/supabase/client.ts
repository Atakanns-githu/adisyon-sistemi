// Tarayıcı tarafında Supabase client oluşturur
import { createBrowserClient } from '@supabase/ssr';
import type { Database } from '@/types/database';

// Her çağrıda yeni bir browser client döndürür
export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
