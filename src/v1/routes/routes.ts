import express from 'express';
import { surveyRouter } from '../surveys/routes';
import { authRouter } from '../auth/router';
import questionTypeRouter from '../questionType/route';
const allRouter = express.Router();
allRouter.use('/survey', surveyRouter)
allRouter.use('/question', questionTypeRouter)
allRouter.use('/auth', authRouter)
export { allRouter };
