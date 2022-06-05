"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("../Mongo/mongoose");
const customer_1 = __importDefault(require("../Router/customer"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const Environment = process.env.NODE_ENV || 'DEV';
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD, OPTIONS");
    next();
});
app.use('/customer', customer_1.default);
app.get('/', (req, res) => {
    res.send('<h1>Hello from the TypeScript world!</h1>');
});
(0, mongoose_1.connect)();
app.listen(PORT, () => console.log(`Running on ${PORT} Environment: ${Environment}`));
