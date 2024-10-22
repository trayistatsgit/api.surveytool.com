import { Request, Response } from "express";
import authService from "../services/";
import { errorResponseHandler, responseHandler } from "../../helpers/responseHandler";

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await authService.login();
        responseHandler(res, response);
    } catch (error) {
        errorResponseHandler(res, error);
    }
};
