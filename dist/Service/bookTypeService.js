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
exports.deleteBookTypeDetails = exports.addBookTypeDetails = exports.getBookTypeDetails = void 0;
const bookTypes_1 = __importDefault(require("../Models/bookTypes"));
const getBookTypeDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getBookDetails = yield bookTypes_1.default.find({
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
exports.getBookTypeDetails = getBookTypeDetails;
const addBookTypeDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { typeName, childTypeName } = req.body;
        const addBookDetails = yield bookTypes_1.default.create({
            typeName, childTypeName
        });
        return addBookDetails;
    }
    catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users');
    }
});
exports.addBookTypeDetails = addBookTypeDetails;
const deleteBookTypeDetails = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updateBookType = yield bookTypes_1.default.findByIdAndUpdate(req.params.id, { $set: { isDeleted: true, isActive: false } }, { new: true });
            return updateBookType;
        }
        catch (e) {
            // Log Errors
            throw Error('Error while Paginating Users');
        }
    });
};
exports.deleteBookTypeDetails = deleteBookTypeDetails;
