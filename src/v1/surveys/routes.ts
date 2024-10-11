import express from 'express';
import { createSurvey } from './controller/controller';
const surveyRouter = express.Router();
surveyRouter.get('/crate-survey', createSurvey);
export { surveyRouter };
