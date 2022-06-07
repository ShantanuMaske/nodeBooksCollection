import { Router } from 'express';
const BooksRouter = Router();
import * as bookService from '../Service/bookService'

BooksRouter.get('/getBook-detail/:type', async (req, res)  =>   {
    try{
        const getBookDetails = await bookService.getBookDetails(req, res)
        res.status(200).json(
            getBookDetails
        );
    }catch(e){
        res.status(500).json({
            msg: "Internal Server Error",
            error: e
        })
    }
});

BooksRouter.post('/addBook-detail', async (req, res)  =>   {
    try{
        const addBookDetails = await bookService.addBookDetails(req, res)
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

export default BooksRouter