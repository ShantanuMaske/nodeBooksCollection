"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const booksSchema = new mongoose_1.default.Schema({
    bookName: {
        type: String,
        required: true
    },
    booksAuthor: {
        type: String,
        required: true
    },
    booksPublisher: {
        type: String,
        required: true
    },
    bookType: {
        type: String,
        required: true
    },
    bookPrice: {
        type: String,
        required: true
    },
    bookDescription: {
        type: String,
        required: true
    },
    bookQuantity: {
        type: String,
        required: true
    },
    booksRating: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });
const booksDetail = mongoose_1.default.model('books', booksSchema);
exports.default = booksDetail;
