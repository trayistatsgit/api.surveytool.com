import express from 'express';
import { surveyRouter } from '../surveys/routes';
import questionTypeRouter from '../questionType/route';
import EditSurveyeRouter from '../EditSurvey/route'
const allRouter = express.Router();
allRouter.use('/EditSurvey', EditSurveyeRouter)
allRouter.use('/survey', surveyRouter)
allRouter.use('/question', questionTypeRouter)
export { allRouter };
