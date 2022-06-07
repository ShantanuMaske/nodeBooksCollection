"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose = require('mongoose');
const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/BooksLibrary', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log('DB Connected');
    });
};
exports.connect = connect;
exports.default = exports.connect;
