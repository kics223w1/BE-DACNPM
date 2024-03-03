import { createClient, SupabaseClient } from '@supabase/supabase-js';

class SuperbaseService {
  private readonly supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://fkegtowrdocoiqxlgjfv.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrZWd0b3dyZG9jb2lxeGxnamZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4ODA4NDcsImV4cCI6MjAyNDQ1Njg0N30.G409d3e6U7W5_K5Nq0IgKdud9gMTNgDGL66ti9wZ8mA',
    );
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }
}

export default new SuperbaseService();
