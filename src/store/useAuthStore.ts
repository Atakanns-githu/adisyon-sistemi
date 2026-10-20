// PIN ile giriş yapan personelin oturum bilgilerini tutar
// persist middleware ile localStorage'a kaydeder (sekme kapatılınca oturum korunur)
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StaffUser {
  id: string;
  name: string;
  role: 'admin' | 'waiter' | 'kitchen';
}

interface AuthState {
  staff: StaffUser | null;
  isAuthenticated: boolean;
  // PIN ile giriş yapıldığında çağrılır
  login: (staff: StaffUser) => void;
  // Çıkış yapıldığında tüm oturum bilgisi temizlenir
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      staff: null,
      isAuthenticated: false,
      login: (staff: StaffUser) => set({ staff, isAuthenticated: true }),
      logout: () => set({ staff: null, isAuthenticated: false }),
    }),
    {
      // localStorage anahtarı
      name: 'pos-auth-storage',
    }
  )
);
