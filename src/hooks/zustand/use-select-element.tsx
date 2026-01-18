import { create } from "zustand";

type SelectedElement = {
    element: Element | null;
};

interface SelectElementStore {
    selectedElement: SelectedElement;
    setSelectedElement: (element: Element | null) => void;
}

const useSelectElement = create<SelectElementStore>((set) => ({
    selectedElement: { element: null },
    setSelectedElement: (element: Element | null) => set({ selectedElement: { element } })
}));

export default useSelectElement;