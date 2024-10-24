import { Request, Response } from 'express';
import { errorResponseHandler, responseHandler } from '../../../helpers/responseHandler';
import authService from '../service/signUP.service';

export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        // Directly pass the result from authService to responseHandler
        const result = await authService.signUp(req.body.email, req.body.password);
        responseHandler(res, result);
    } catch (error) {
        errorResponseHandler(res, error);
    }
};
