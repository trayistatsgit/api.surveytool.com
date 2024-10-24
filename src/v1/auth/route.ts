import express from 'express';
import { signUp } from './signup/controller/controller';
import { validateEmail } from './validation/validation';

const authRegisterRouter = express.Router();

authRegisterRouter.post('/authRegister',validateEmail, signUp);


export default authRegisterRouter;
