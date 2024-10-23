import express from 'express';
import { login} from './controller/controller';
const authRouter = express.Router();
authRouter.post('/login-page',login)
export { authRouter };
