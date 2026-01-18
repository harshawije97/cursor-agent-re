/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

interface ComponentSpec {
  component: {
    imports?: any;
    data?: any;
    body?: any;
    output_format?: any;
    technologies?: string[];
  };
}

interface ComponentStore {
  component: ComponentSpec | null;
  setComponent: (spec: ComponentSpec) => void;
  loadFromLocalStorage: () => void;
  saveToLocalStorage: (spec: ComponentSpec) => void;
  getComponent: () => ComponentSpec | null;
}

const useComponentStore = create<ComponentStore>((set, get) => ({
  component: null,
  setComponent: (spec) => set({ component: spec }),
  loadFromLocalStorage: () => {
    const stored = localStorage.getItem('component');
    if (stored) {
      set({ component: JSON.parse(stored) });
    }
  },
  saveToLocalStorage: (spec) => {
    localStorage.setItem('component', JSON.stringify(spec));
    set({ component: spec });
  },
  getComponent: () => get().component,
}));

export default useComponentStore;