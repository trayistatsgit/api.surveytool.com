import path from 'path';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import logger from 'morgan';
import { allRouter } from './v1/routes/routes';
import { connectToDatabase } from './config/db/connection';

const app = express();
app.use(logger('dev'));
app.set('port', process.env.PORT || 4002);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
export const environment = app.get('env');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(cors())
app.use(function (_req: Request, res: Response, next: NextFunction) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});
connectToDatabase();
app.get('/api', (request: Request, response: Response) => {
  const dateTime = new Date();
  response.status(200).json({ msg: `Server is running. Time: ${dateTime} ENV: ${environment}` });
});

app.use('/api/v1', allRouter);
// middleware to handle error
// 404 handler
app.use('*', (_req: Request, res: Response) => {
  return res.status(404).send({ status: 404, errors: [{ message: 'Not found' }] });
});

export default app;
