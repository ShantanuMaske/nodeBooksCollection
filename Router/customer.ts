import express from 'express';

import { Router } from 'express';
const CustomerRouter = Router();
import * as customerService from "../Service/customerService"
// import auth from '../Auth/auth'

CustomerRouter.post('/create-customer', async (req, res)  =>   {
    try{
        const createEntry:any = await customerService.createCustomer(req, res)
        if(createEntry){
        res.status(200).json(createEntry);
    }
    }catch(e){
        res.status(500).json({
            msg: "Internal Server Error",
            error: e
        })
    }
});

CustomerRouter.get('/get-all', async (req, res)  =>   {
    try{
        const getEntry:any = await customerService.getCustomer(req, res)
        if(getEntry){
        res.status(200).json(getEntry);
    }
    }catch(e){
        res.status(500).json({
            msg: "Internal Server Error",
            error: e
        })
    }
});

CustomerRouter.post('/get-one/:id', async (req, res)  =>   {
    try{
        const getEntry:any = await customerService.getOneCustomer(req, res)
        if(getEntry){
        res.status(200).json(getEntry);
    }
    }catch(e){
        res.status(500).json({
            msg: "Internal Server Error",
            error: e
        })
    }
});

CustomerRouter.patch('/update-customer/:id', async (req, res)  =>   {
    try{
        const updateEntry:any = await customerService.updateCustomer(req, res)
        if(updateEntry){
        res.status(200).json(updateEntry);
    }
    }catch(e){
        res.status(500).json({
            msg: "Internal Server Error",
            error: e
        })
    }
});

CustomerRouter.patch('/delete-customer/:id', async (req, res)  =>   {
    try{
        const deleteEntry:any = await customerService.deleteCustomer(req, res)
        if(deleteEntry){
        res.status(200).json(deleteEntry);
    }
    }catch(e){
        res.status(500).json({
            msg: "Internal Server Error",
            error: e
        })
    }
});

export default CustomerRouter