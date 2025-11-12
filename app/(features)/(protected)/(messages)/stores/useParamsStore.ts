import { create } from "zustand";

interface ParamStore {
    paramId: string | null;
    setParamId: (id: string | null) => void;
    clearParamId: () => void;
}

export const useParamStore = create<ParamStore>((set) => ({
    paramId: null,
    setParamId: (id) => set({ paramId: id }),
    clearParamId: () => set({ paramId: null }),
}));
