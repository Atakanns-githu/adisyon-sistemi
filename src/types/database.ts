// Supabase veritabanı tip tanımları — otomatik üretilmiş şemadan türetildi
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      staff: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          pin: string;
          role: 'admin' | 'waiter' | 'kitchen';
          is_active: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          pin: string;
          role: 'admin' | 'waiter' | 'kitchen';
          is_active?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          pin?: string;
          role?: 'admin' | 'waiter' | 'kitchen';
          is_active?: boolean;
        };
      };
      tables: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          capacity: number;
          status: 'empty' | 'occupied' | 'reserved' | 'bill';
          table_code: string;
          section: string | null;
          position_x: number | null;
          position_y: number | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          capacity?: number;
          status?: 'empty' | 'occupied' | 'reserved' | 'bill';
          table_code: string;
          section?: string | null;
          position_x?: number | null;
          position_y?: number | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          capacity?: number;
          status?: 'empty' | 'occupied' | 'reserved' | 'bill';
          table_code?: string;
          section?: string | null;
          position_x?: number | null;
          position_y?: number | null;
        };
      };
      categories: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          icon: string | null;
          sort_order: number;
          is_active: boolean;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          icon?: string | null;
          sort_order?: number;
          is_active?: boolean;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          icon?: string | null;
          sort_order?: number;
          is_active?: boolean;
        };
      };
      products: {
        Row: {
          id: string;
          created_at: string;
          category_id: string;
          name: string;
          description: string | null;
          price: number;
          image_url: string | null;
          is_available: boolean;
          sort_order: number;
          kitchen_note: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          category_id: string;
          name: string;
          description?: string | null;
          price: number;
          image_url?: string | null;
          is_available?: boolean;
          sort_order?: number;
          kitchen_note?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          category_id?: string;
          name?: string;
          description?: string | null;
          price?: number;
          image_url?: string | null;
          is_available?: boolean;
          sort_order?: number;
          kitchen_note?: string | null;
        };
      };
      orders: {
        Row: {
          id: string;
          created_at: string;
          table_id: string;
          staff_id: string | null;
          status: 'open' | 'paid' | 'cancelled';
          total_amount: number;
          payment_method: 'cash' | 'card' | 'split' | null;
          notes: string | null;
          closed_at: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          table_id: string;
          staff_id?: string | null;
          status?: 'open' | 'paid' | 'cancelled';
          total_amount?: number;
          payment_method?: 'cash' | 'card' | 'split' | null;
          notes?: string | null;
          closed_at?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          table_id?: string;
          staff_id?: string | null;
          status?: 'open' | 'paid' | 'cancelled';
          total_amount?: number;
          payment_method?: 'cash' | 'card' | 'split' | null;
          notes?: string | null;
          closed_at?: string | null;
        };
      };
      order_items: {
        Row: {
          id: string;
          created_at: string;
          order_id: string;
          product_id: string;
          quantity: number;
          unit_price: number;
          total_price: number;
          status: 'pending' | 'preparing' | 'ready' | 'served' | 'cancelled';
          notes: string | null;
          is_complimentary: boolean;
          portion: string | null;
          tags: string[] | null;
          product_name: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          order_id: string;
          product_id: string;
          quantity?: number;
          unit_price: number;
          total_price?: number;
          status?: 'pending' | 'preparing' | 'ready' | 'served' | 'cancelled';
          notes?: string | null;
          is_complimentary?: boolean;
          portion?: string | null;
          tags?: string[] | null;
          product_name?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          order_id?: string;
          product_id?: string;
          quantity?: number;
          unit_price?: number;
          total_price?: number;
          status?: 'pending' | 'preparing' | 'ready' | 'served' | 'cancelled';
          notes?: string | null;
          is_complimentary?: boolean;
          portion?: string | null;
          tags?: string[] | null;
          product_name?: string | null;
        };
      };
      reservations: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          phone: string;
          email: string | null;
          party_size: number;
          reservation_date: string;
          reservation_time: string;
          notes: string | null;
          status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
          table_id: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          phone: string;
          email?: string | null;
          party_size: number;
          reservation_date: string;
          reservation_time: string;
          notes?: string | null;
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
          table_id?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          phone?: string;
          email?: string | null;
          party_size?: number;
          reservation_date?: string;
          reservation_time?: string;
          notes?: string | null;
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed';
          table_id?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
