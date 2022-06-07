"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookTypesSchema = new mongoose_1.default.Schema({
    typeName: {
        type: String,
        required: true
    },
    childTypeName: [String],
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });
const bookTypes = mongoose_1.default.model('bookTypes', bookTypesSchema);
exports.default = bookTypes;
