
// @ts-nocheck


import { io, Socket } from "socket.io-client";

let socket: Socket;
const connectSocket = (user_id:string) => {
  socket = io("http://localhost:8000/", {
    query: `user_id=${user_id}`,
  });
} // Add this -- our server will run on port 8000, so we connect to it from here

export {socket, connectSocket};