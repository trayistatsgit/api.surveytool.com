import express from 'express';
import { login} from './controller/controller';
const authRouter = express.Router();
authRouter.get('/login-page',login)
export { authRouter };
