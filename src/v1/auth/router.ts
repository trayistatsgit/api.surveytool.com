import express from 'express';
import { login} from './controller/controller';
import { validateEmail} from './Validation/validation';
const authRouter = express.Router();
authRouter.post('/login-page',validateEmail,login)
export { authRouter };
