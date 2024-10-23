import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import logger from 'morgan';
import { allRouter } from './v1/routes/routes';
import { connectToDatabase } from './config/db/connection';
import { config } from './config/config';
import cookieParser from "cookie-parser";
const app = express();
app.use(logger('dev'));
app.set('port', process.env.PORT || 4002);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
export const environment = app.get('env');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/static', express.static(path.join(config.fileUploadPath ?? '', '\\sptsurveyimages\\')));

app.use(function (_req: Request, res: Response, next: NextFunction) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});
connectToDatabase();
app.get('/api', (_request: Request, response: Response) => {
  const dateTime = new Date();
  response.status(200).json({ msg: `Server is running. Time: ${dateTime} ENV: ${environment}` });
});

app.use('/api/v1', allRouter);

app.use('*', (_req: Request, res: Response) => {
  return res.status(404).send({ status: 404, errors: [{ message: 'Not found' }] });
});
process
  .on('unhandledRejection', (reason: any) => {
    let errorData: any = reason;
    if (reason.stack) {
      errorData = reason.stack;
    }
  })
  .on('uncaughtException', err => {
    let errorData: any = err;
    if (err.stack) {
      errorData = err.stack;
    }
  });

export default app;
