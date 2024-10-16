import express from 'express';
import { createSurveyId } from './controller/controller';
const surveyRouter = express.Router();
surveyRouter.post('/create-survey-id', createSurveyId);
export { surveyRouter };
