// src/v1/controllers/questionTypeController.ts

import { Request, Response } from 'express';
import { getAllQuestionTypes} from '../services/questionType.service';
import { errorResponseHandler, responseHandler } from "../../helpers/responseHandler";


export const getQuestionTypes = async (req: Request, res: Response) => {
  try {
    const questionTypes = await getAllQuestionTypes();
    responseHandler(res, questionTypes);
  } catch (error) {
    errorResponseHandler(res, error);
  }
};
