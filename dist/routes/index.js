"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = __importDefault(require("./user.route"));
const upload_route_1 = __importDefault(require("./upload.route"));
function route(app) {
    app.use('/users', user_route_1.default);
    app.use('/uploads', upload_route_1.default);
}
exports.default = route;
