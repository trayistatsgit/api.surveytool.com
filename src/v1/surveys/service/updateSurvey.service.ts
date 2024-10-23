import Survey from '../model/model';
import { ServiceResponse } from '../../helpers/responseHandler';
import { IUpdateSurvey } from '../types';
import { uploadedFileToServer } from '../../utils/fileUploadToServer';
import { config } from '../../../config/config';

export const updateSurvey = async (bodyData: IUpdateSurvey): Promise<ServiceResponse> => {
    const { surveyId, userId, surveyName, surveyDescription, fileData } = bodyData;
    const survey = await Survey.findOne({
        where: { surveyId: surveyId }
    });
    if (!survey) {
        return {
            status: 404,
            message: 'Survey is not found.',
            data: [],
            errors: false,
            success: true,
        }
    }
    const { buffer, originalname } = fileData
    const splittedFile = originalname.split('.')
    const nameExt = splittedFile[splittedFile.length - 1]
    if (!['png', 'jpge'].includes(nameExt)) {
        return {
            status: 400,
            message: 'File extention should be png or jpge',
            data: [],
            errors: false,
            success: true,
        }
    }
    const fileName = `${splittedFile[0]}_${surveyId}.${nameExt}`
    if (originalname) {
        await uploadedFileToServer(fileName, buffer)
    }
    survey.surveyName = surveyName;
    survey.surveyDescription = surveyDescription;
    survey.updatedBy = userId;
    survey.logo = originalname ? `${config.baseUrl}api/v1/survey/survey-image/${fileName}` : null;
    await survey.save();
    return {
        status: 200,
        message: 'Survey updated.',
        data: survey,
        errors: false,
        success: true,
    }
}
