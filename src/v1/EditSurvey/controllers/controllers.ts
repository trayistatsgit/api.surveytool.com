import { Request, Response } from 'express';
import { getAlleditSurvey} from '../services/editSurvey.survice';
import { errorResponseHandler, responseHandler } from "../../helpers/responseHandler";


export const getEditSurvey = async (_req: Request, res: Response):Promise<void> => {
  try {
    const getSurvey = await getAlleditSurvey();
    responseHandler(res, getSurvey);
  } catch (error) {
    errorResponseHandler(res, error);
  }
};
