import Survey from '../model/model';
import { ServiceResponse } from '../../helpers/responseHandler';
import { IUpdateSurvey } from '../types';

export const updateSurvey = async (bodyData: IUpdateSurvey): Promise<ServiceResponse> => {
    const { surveyId, userId, surveyName, surveyDescription } = bodyData;
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
    survey.surveyName = surveyName;
    survey.surveyDescription = surveyDescription;
    survey.updatedBy = userId;
    await survey.save();
    return {
        status: 200,
        message: 'Survey updated.',
        data: survey,
        errors: false,
        success: true,
    }
}
