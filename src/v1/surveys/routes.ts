import express from 'express';
import { attemptSurvey, createSurveyId, getSurveyById, surveyOptionSoftDelete, updateSurvey, upsertSurveyQuestion,surveyDetail } from './controller/controller';
import multer from 'multer';
import { getImage } from './controller/getImage.controller';
const surveyRouter = express.Router();
const storage = multer.memoryStorage();
const upload = multer({storage : storage});
surveyRouter.post('/create-survey-id', createSurveyId);
surveyRouter.post('/update-survey', upload.single('logo'), updateSurvey);
surveyRouter.post('/upsert-survey-question', upsertSurveyQuestion);
surveyRouter.get('/get-survey/:surveyId', getSurveyById);
surveyRouter.patch('/survey-option-disable/:optionId', surveyOptionSoftDelete);
surveyRouter.post('/survey-attempt', attemptSurvey);
surveyRouter.get('/survey-image/:fileName', getImage);
// surveyRouter.post('/upload-logo', uploadSurveyLogo);
surveyRouter.get('/survey-detail',surveyDetail)
export { surveyRouter };
