// POS terminali için global state — masa durumlarını tutar
import { create } from 'zustand';

export interface TableStatus {
  id: string;
  name: string;
  status: 'empty' | 'occupied' | 'reserved' | 'bill';
  capacity: number;
  section: string | null;
  table_code: string;
}

interface PosState {
  tables: TableStatus[];
  selectedTableId: string | null;
  // Sunucudan gelen masa listesini state'e yazar
  setTables: (tables: TableStatus[]) => void;
  // Realtime subscription'dan gelen masa durum güncellemesi
  updateTableStatus: (tableId: string, status: TableStatus['status']) => void;
  // Adisyon ekranına geçilirken hangi masa seçildi
  setSelectedTable: (tableId: string | null) => void;
}

export const usePosStore = create<PosState>((set) => ({
  tables: [],
  selectedTableId: null,
  setTables: (tables) => set({ tables }),
  updateTableStatus: (tableId, status) =>
    set((state) => ({
      tables: state.tables.map((t) =>
        t.id === tableId ? { ...t, status } : t
      ),
    })),
  setSelectedTable: (tableId) => set({ selectedTableId: tableId }),
}));
