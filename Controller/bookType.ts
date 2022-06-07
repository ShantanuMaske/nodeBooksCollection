import { Router } from 'express';
const BooksTypeRouter = Router();
import * as bookTypeService from '../Service/bookTypeService'

BooksTypeRouter.get('/getBookType-detail', async (req, res)  =>   {
    try{
        const getBookDetails = await bookTypeService.getBookTypeDetails(req, res)
        res.status(200).json({
            data: getBookDetails
        });
    }catch(e){
        res.status(500).json({
            msg: "Internal Server Error",
            error: e
        })
    }
});

BooksTypeRouter.post('/addBookType-detail', async (req, res)  =>   {
    try{
        const addBookDetails = await bookTypeService.addBookTypeDetails(req, res)
        res.status(200).json({
            data: addBookDetails
        });
    }catch(e){
        res.status(500).json({
            msg: "Internal Server Error",
            error: e
        })
    }
});

export default BooksTypeRouter