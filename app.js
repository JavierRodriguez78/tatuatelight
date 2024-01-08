import express from 'express'
import cookieParser from 'cookie-parser';
import morgan from 'morgan';


import router from './router.js';
import assignId from './middeware/assignId.js';
import startConnection from './infrastructure/persistence/MongooseConnect.js';

morgan.token('id',(req) =>req.id);

const app = express();
//app.use(logger('dev'));


app.use(assignId);
app.use(morgan(':id :method :url :response-time'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(router);

//Conection to MongoDB
startConnection();


export default app;

