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
exports.deleteBookDetails = exports.addBookDetails = exports.getBookDetails = void 0;
const books_1 = __importDefault(require("../Models/books"));
const getBookDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getBookDetails = yield books_1.default.find({
            isActive: true,
            isDeleted: false
        });
        return getBookDetails;
    }
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users');
    }
});
exports.getBookDetails = getBookDetails;
const addBookDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookName, booksAuthor, booksPublisher, bookType, bookPrice, bookDescription, bookQuantity, booksRating } = req.body;
        const addBookDetails = yield books_1.default.create({
            bookName,
            booksAuthor,
            booksPublisher,
            bookType,
            bookPrice,
            bookDescription,
            bookQuantity,
            booksRating
        });
        return addBookDetails;
    }
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users');
    }
});
exports.addBookDetails = addBookDetails;
const deleteBookDetails = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updateBookDetails = yield books_1.default.findByIdAndUpdate(req.params.id, { $set: { isDeleted: true, isActive: false } }, { new: true });
            return updateBookDetails;
        }
        catch (e) {
            // Log Errors
            throw Error('Error while Paginating Users');
        }
    });
};
exports.deleteBookDetails = deleteBookDetails;
