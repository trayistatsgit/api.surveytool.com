import {login} from './controllers/controllers'
import express from 'express';
const authRouter = express.Router();
authRouter.get('/login', login);
export {authRouter};
