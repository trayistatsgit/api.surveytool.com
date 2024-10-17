import express from 'express';
import { createSurveyId, getSurveyById, updateSurvey, upsertSurveyQuestion } from './controller/controller';
const surveyRouter = express.Router();
surveyRouter.post('/create-survey-id', createSurveyId);
surveyRouter.patch('/update-survey', updateSurvey)
surveyRouter.post('/upsert-survey-question', upsertSurveyQuestion);
surveyRouter.get('/get-survey/:surveyId', getSurveyById)
export { surveyRouter };
