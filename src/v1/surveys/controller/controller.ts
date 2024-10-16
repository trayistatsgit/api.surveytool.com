import { Request, Response } from "express";
import surveyService from "../service";
import { errorResponseHandler, responseHandler } from "../../helpers/responseHandler";

export const createSurveyId = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await surveyService.createSurveyId();
        responseHandler(res, response);
    } catch (error) {
        errorResponseHandler(res, error);
    }
};
