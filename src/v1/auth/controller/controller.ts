import { Request, Response } from "express";
import authService from "../service";
import { errorResponseHandler, responseHandler } from "../../helpers/responseHandler";
import { FormData } from "./type/type";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const details = req.query.details as any; 
    const bodyData: FormData = details?.formData;

    if (!bodyData) {
      throw new Error("Form data is missing or invalid.");
    }

    const response = await authService.login(bodyData.email, bodyData.password);
    responseHandler(res, response);
  } catch (error) {
    errorResponseHandler(res, error);
  }
};
