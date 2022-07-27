"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const index_1 = __importDefault(require("./routes/index"));
const cors = require("cors");
const app = express();
app.use(cors({
    origin: [process.env.Domain_Fe]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;
// db();
app.listen(port, () => { console.log(`Server listen at ${port}`); });
(0, index_1.default)(app);
