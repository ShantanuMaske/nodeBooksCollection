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
exports.deleteCustomer = exports.updateCustomer = exports.getOneCustomer = exports.getCustomer = exports.createCustomer = void 0;
const custmodel_1 = __importDefault(require("../Models/custmodel"));
const createCustomer = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, address, age, password } = req.body;
            const createCustomer = yield custmodel_1.default.create({
                name: name,
                address: {
                    phone: address.phone,
                    street: address.street
                },
                age: age,
                password: password
            });
            return createCustomer;
        }
        catch (e) {
            // Log Errors
            throw Error('Error while Paginating Users');
        }
    });
};
exports.createCustomer = createCustomer;
const getCustomer = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const getCustomer = yield custmodel_1.default.find({});
            return getCustomer;
        }
        catch (e) {
            // Log Errors
            throw Error('Error while Paginating Users');
        }
    });
};
exports.getCustomer = getCustomer;
const getOneCustomer = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const getCustomer = yield custmodel_1.default.findById(id);
            return getCustomer;
        }
        catch (e) {
            // Log Errors
            throw Error('Error while Paginating Users');
        }
    });
};
exports.getOneCustomer = getOneCustomer;
const updateCustomer = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updateCustomer = yield custmodel_1.default.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            return updateCustomer;
        }
        catch (e) {
            // Log Errors
            throw Error('Error while Paginating Users');
        }
    });
};
exports.updateCustomer = updateCustomer;
const deleteCustomer = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updateCustomer = yield custmodel_1.default.findByIdAndDelete(req.params.id);
            return updateCustomer;
        }
        catch (e) {
            // Log Errors
            throw Error('Error while Paginating Users');
        }
    });
};
exports.deleteCustomer = deleteCustomer;
