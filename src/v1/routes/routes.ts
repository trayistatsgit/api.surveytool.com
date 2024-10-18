import express from 'express';
import { surveyRouter } from '../surveys/routes';
import questionTypeRouter from '../questionType/route';
const allRouter = express.Router();
allRouter.use('/survey', surveyRouter)
allRouter.use('/question', questionTypeRouter)
export { allRouter };
