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
exports.deleteAdminDetails = exports.getAdmin = exports.createAdmin = void 0;
const admin_1 = __importDefault(require("../Models/admin"));
const createAdmin = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, address, age, password } = req.body;
            const createAdmin = yield admin_1.default.create({
                name: name,
                email: email,
                address: {
                    phone: address.phone,
                    street: address.street
                },
                age: age,
                password: password
            });
            return createAdmin;
        }
        catch (e) {
            // Log Errors
            throw Error('Error while Paginating Users');
        }
    });
};
exports.createAdmin = createAdmin;
const getAdmin = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const adminDetail = yield admin_1.default.findOne({
                email,
                password
            });
            if (adminDetail) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            // Log Errors
            throw Error('Error while Paginating Users');
        }
    });
};
exports.getAdmin = getAdmin;
const deleteAdminDetails = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updateAdmin = yield admin_1.default.findByIdAndUpdate(req.params.id, { $set: { isDeleted: true, isActive: false } }, { new: true });
            return updateAdmin;
        }
        catch (e) {
            // Log Errors
            throw Error('Error while Paginating Users');
        }
    });
};
exports.deleteAdminDetails = deleteAdminDetails;
