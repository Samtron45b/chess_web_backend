import express from 'express';
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import chessService from "./src/services/chess.service.js";
import Chess from './js/chess.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = process.env.PORT  || 3000;

const httpServer = createServer(app);
const io = new Server(httpServer, { 
    cors: {
        origin: ["http://localhost:4200", "http://localhost:3001", "https://app-chat-vch.herokuapp.com"],
      }
});

let game = new Chess();

io.on("connection", async (socket) => {

    socket.on("white-move", async (source, destination) => {
        // make white move
        chessService.white_move(game, source, destination);
        // chose black best move

        console.log("white mote", game.ascii());
        const black_move = chessService.black_move(game);

        console.log("black mote", game.ascii());
        socket.emit("black-moved", black_move);
    })

    socket.emit("greeting", "hello from the server")
})

httpServer.listen(port, ()=>{console.log(`Server listen at ${port}`)})
