import { create } from "zustand";


interface ChatSettingsState {
    isOpen: boolean;
    notificationsEnabled: boolean;
    // actions
    open: () => void;
    close: () => void;
    toggle: () => void;
    setNotifications: (enabled: boolean) => void;
}

export const useChatSettingsStore = create<ChatSettingsState>((set) => ({
    isOpen: false,
    notificationsEnabled: true,

    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),

    setNotifications: (enabled) => set({ notificationsEnabled: enabled }),
}));
