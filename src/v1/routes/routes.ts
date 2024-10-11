import express from 'express';
import { surveyRouter } from '../surveys/routes';
const allRouter = express.Router();
allRouter.use('survey', surveyRouter)
export { allRouter };