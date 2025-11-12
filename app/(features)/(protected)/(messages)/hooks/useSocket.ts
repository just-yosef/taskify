// import { useEffect, useRef, useState } from "react";
// import { io, Socket } from "socket.io-client";

// export function useSocket() {
//     const [socket] = useState(() => io("http://localhost:5000"))

//     useEffect(() => {
//         socket.on("connect", () => {
//             console.log("✅ Socket connected:", socket?.id);
//         });
//         socket.on("send-message-success", (data) => {
//             console.log("Message sent:", data);
//         });

//         return () => {
//             socket?.off("connect");
//             socket?.off("send-message-success");
//             socket?.disconnect();
//         };
//     }, []);

//     return { socket };
// }
