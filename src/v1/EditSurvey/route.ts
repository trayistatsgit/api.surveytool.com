// src/v1/routes/questionTypeRoute.ts

import express from 'express';
import { getEditSurvey} from './controllers/controllers';

const EditSurveyeRouter = express.Router();

// Route to get all question types
EditSurveyeRouter.get('/Edit-survey', getEditSurvey);



export default EditSurveyeRouter;
