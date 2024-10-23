import { Request, Response } from "express";
import surveyService from "../service";
import { errorResponseHandler, responseHandler } from "../../helpers/responseHandler";
import { getClientIp } from "../../helpers/getClientIp";

export const createSurveyId = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await surveyService.createSurveyId();
        responseHandler(res, response);
    } catch (error) {
        errorResponseHandler(res, error);
    }
};
export const updateSurvey = async (req: Request, res: Response): Promise<void> => {
    try {
        const bodyData = req.body;
        bodyData.fileData = req.file;
        bodyData.createdBy = 1
        const response = await surveyService.updateSurvey(bodyData);
        responseHandler(res, response);
    } catch (error) {
        errorResponseHandler(res, error);
    }
};
export const upsertSurveyQuestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const bodyData = req.body
        bodyData.createdBy = 1
        const response = await surveyService.upsertSurveyQuestions(bodyData);
        responseHandler(res, response);
    } catch (error) {
        errorResponseHandler(res, error);
    }
};
export const getSurveyById = async (req: Request, res: Response): Promise<void> => {
    try {
        const bodyData = {
            surveyId: req.params.surveyId as unknown as string,
            userId: 1
        }
        const response = await surveyService.getSurveyById(bodyData);
        responseHandler(res, response);
    } catch (error) {
        errorResponseHandler(res, error);
    }
};
export const surveyOptionSoftDelete = async (req: Request, res: Response): Promise<void> => {
    try {
        const bodyData = {
            optionId: req.params.optionId as unknown as number,
            userId: '1'
        }
        const response = await surveyService.surveyOptionSoftDelete(bodyData);
        responseHandler(res, response);
    } catch (error) {
        errorResponseHandler(res, error);
    }
};
export const attemptSurvey = async (req: Request, res: Response): Promise<void> => {
    try {
        const bodyData = req.body;
        bodyData.cookieId = req.headers['cookie-id'];
        bodyData.ipAddress = await getClientIp(req);
        const response = await surveyService.surveyAttempt(bodyData);
        responseHandler(res, response);
    } catch (error) {
        errorResponseHandler(res, error);
    }
};
