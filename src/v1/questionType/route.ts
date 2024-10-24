// src/v1/routes/questionTypeRoute.ts

import express from 'express';
import { getQuestionTypes} from './controllers/controller';
// import { verifyToken } from '../utils/jwt';
import { verifyToken } from '../utils/authMiddleware';

const questionTypeRouter = express.Router();

// Route to get all question types
questionTypeRouter.get('/question-type',verifyToken ,getQuestionTypes);


export default questionTypeRouter;
