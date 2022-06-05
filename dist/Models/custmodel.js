"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const customerSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        phone: {
            type: Number
        },
        street: {
            type: String
        }
    },
    age: {
        type: Number,
    },
    password: {
        type: String
    }
});
const Customer = mongoose_1.default.model('customers', customerSchema);
exports.default = Customer;
