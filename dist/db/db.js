"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
<<<<<<< HEAD
const host_db = process.env.db || "mongodb://localhost:27017/AppChat";
=======
const host_db = process.env.db || "mongodb+srv://1803:1803@cluster0.dwvix.mongodb.net/Auction?retryWrites=true&w=majority";
>>>>>>> 29cd0c38b5b5de6735aab6ff93a630f4c9f3ad00
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect('mongodb+srv://1803:1803@cluster0.dwvix.mongodb.net/Auction?retryWrites=true&w=majority');
            console.log("connect to mongoDB");
        }
        catch (error) {
            console.log("error", error);
        }
    });
}
exports.default = connect;
