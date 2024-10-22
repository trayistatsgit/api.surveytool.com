import express from 'express';
import { surveyRouter } from '../surveys/routes';
import questionTypeRouter from '../questionType/route';
import {authRouter} from '../auth/routes';
const allRouter = express.Router();
allRouter.use('/survey', surveyRouter)
allRouter.use('/question', questionTypeRouter)
allRouter.use('/auth', authRouter)
export { allRouter }; 