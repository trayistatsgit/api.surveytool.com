import { Request, Response } from "express";
import authService from "../service";
import { errorResponseHandler, responseHandler } from "../../helpers/responseHandler";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const bodyData = req.body; 
    if (!bodyData) {
      throw new Error("Form data is missing or invalid.");
    }
    const response = await authService.login(bodyData);
    responseHandler(res, response);
  } catch (error) {
    errorResponseHandler(res, error);
  }
};
