import { Request, Response } from "express";
import surveyService from "../service";
import { errorResponseHandler, responseHandler } from "../../helpers/responseHandler";

export const createSurvey = async (req: Request, res: Response) => {
    try {
        const response = await surveyService.createSurvey();
        responseHandler(res, response);
    } catch (error) {
        errorResponseHandler(res, error);
    }
};
