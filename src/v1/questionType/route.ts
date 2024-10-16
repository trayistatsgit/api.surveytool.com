// src/v1/routes/questionTypeRoute.ts

import express from 'express';
import { getQuestionTypes} from './controllers/controller';

const questionTypeRouter = express.Router();

// Route to get all question types
questionTypeRouter.get('/question-type', getQuestionTypes);



export default questionTypeRouter;
