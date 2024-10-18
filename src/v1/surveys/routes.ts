import express from 'express';
import { createSurveyId, getSurveyById, surveyOptionSoftDelete, updateSurvey, upsertSurveyQuestion } from './controller/controller';
const surveyRouter = express.Router();
surveyRouter.post('/create-survey-id', createSurveyId);
surveyRouter.patch('/update-survey', updateSurvey)
surveyRouter.post('/upsert-survey-question', upsertSurveyQuestion);
surveyRouter.get('/get-survey/:surveyId', getSurveyById)
surveyRouter.patch('/survey-option-disable/:optionId', surveyOptionSoftDelete)
export { surveyRouter };
