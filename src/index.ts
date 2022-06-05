import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connect } from '../Mongo/mongoose'
import CustomerRouter from "../Router/customer"

dotenv.config();

const PORT = process.env.PORT || 3000;
const Environment = process.env.NODE_ENV || 'DEV'
const app: Express = express();

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD, OPTIONS");  
    next();
  });

app.use('/customer',CustomerRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from the TypeScript world!</h1>');
});

connect();

app.listen(PORT, () => console.log(`Running on ${PORT} Environment: ${Environment}`));
