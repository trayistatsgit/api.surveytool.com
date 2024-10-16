// src/v1/routes/questionTypeRoute.ts

import express from 'express';
import { getQuestionTypes} from '../controllers/controller';

const router = express.Router();

// Route to get all question types
router.get('/question-type', getQuestionTypes);



export default router;
