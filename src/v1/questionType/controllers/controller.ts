import { Request, Response } from 'express';
import { getAllQuestionTypes } from '../services/questionType.service';
import { errorResponseHandler, responseHandler } from '../../helpers/responseHandler';

export const getQuestionTypes = async (_req: Request, res: Response): Promise<void> => {
    try {
        const questionTypes = await getAllQuestionTypes();
        responseHandler(res, questionTypes); 
    } catch (error) {
        errorResponseHandler(res, error);
    }
};
