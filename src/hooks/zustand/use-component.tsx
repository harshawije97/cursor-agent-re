/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

const useComponentStore = create((set) => ({
  component: null,
  setComponent: (spec: any) => set({ component: spec }),
  loadFromLocalStorage: () => {
    const stored = localStorage.getItem('component');
    if (stored) {
      set({ component: JSON.parse(stored) });
    }
  },
  saveToLocalStorage: (spec: any) => {
    localStorage.setItem('component', JSON.stringify(spec));
    set({ component: spec });
  }
}));

export default useComponentStore;