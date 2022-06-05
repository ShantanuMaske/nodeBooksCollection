"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CustomerRouter = (0, express_1.Router)();
const customerService = __importStar(require("../Service/customerService"));
// import auth from '../Auth/auth'
CustomerRouter.post('/create-customer', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createEntry = yield customerService.createCustomer(req, res);
        if (createEntry) {
            res.status(200).json(createEntry);
        }
    }
    catch (e) {
        res.status(500).json({
            msg: "Internal Server Error",
            error: e
        });
    }
}));
CustomerRouter.get('/get-all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getEntry = yield customerService.getCustomer(req, res);
        if (getEntry) {
            res.status(200).json(getEntry);
        }
    }
    catch (e) {
        res.status(500).json({
            msg: "Internal Server Error",
            error: e
        });
    }
}));
CustomerRouter.post('/get-one/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getEntry = yield customerService.getOneCustomer(req, res);
        if (getEntry) {
            res.status(200).json(getEntry);
        }
    }
    catch (e) {
        res.status(500).json({
            msg: "Internal Server Error",
            error: e
        });
    }
}));
CustomerRouter.patch('/update-customer/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateEntry = yield customerService.updateCustomer(req, res);
        if (updateEntry) {
            res.status(200).json(updateEntry);
        }
    }
    catch (e) {
        res.status(500).json({
            msg: "Internal Server Error",
            error: e
        });
    }
}));
CustomerRouter.patch('/delete-customer/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteEntry = yield customerService.deleteCustomer(req, res);
        if (deleteEntry) {
            res.status(200).json(deleteEntry);
        }
    }
    catch (e) {
        res.status(500).json({
            msg: "Internal Server Error",
            error: e
        });
    }
}));
exports.default = CustomerRouter;
