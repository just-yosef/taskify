// stores/useSocketStore.ts
import { create } from "zustand";
import { io, Socket } from "socket.io-client";

type UserSocket = { userId: string; socketId: string };

interface SocketState {
    socket: Socket | null;
    onlineUsers: UserSocket[];
    connect: (userId: string) => void;
    disconnect: () => void;
    setOnlineUsers: (users: UserSocket[]) => void;
}

export const useSocketStore = create<SocketState>((set, get) => ({
    socket: null,
    onlineUsers: [],

    connect: (userId: string) => {
        if (get().socket) return;
        const socket = io("http://localhost:5000", {
            withCredentials: true,
            transports: ["websocket"],
            reconnection: true,
        });

        socket.on("connect", () => {
            console.log("✅ Socket connected:", socket.id);
            socket.emit("new-client-connection", { userId });
        });

        socket.on("online-users", (users: UserSocket[]) => {
            set({ onlineUsers: users });
        });

        socket.on("disconnect", (reason) => {
            console.log("❌ Socket disconnected:", reason);
        });

        set({ socket });
    },

    disconnect: () => {
        const socket = get().socket;
        if (socket) {
            socket.disconnect();
            set({ socket: null });
            set({ onlineUsers: [] });
            console.log("🔌 Socket manually disconnected");
        }
    },

    setOnlineUsers: (users) => set({ onlineUsers: users }),
}));
