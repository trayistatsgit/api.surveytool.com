
import SurveyOption from '../../question/model/option.model'
import { ServiceResponse } from '../../helpers/responseHandler'
import { IOptionDeleteData } from '../types'

export const surveyOptionSoftDelete = async (optionDeleteData:  IOptionDeleteData ): Promise<ServiceResponse> => {
    const { optionId, userId } = optionDeleteData
    const surveyOption = await SurveyOption.update(
        {
            isActive: 0,
            updatedBy: userId
        },
        {
            where: {
                optionId: optionId,
                isActive: 1,
            }
        }
    )
    if (!surveyOption[0]) {
        return {
            status: 404,
            message: 'Option is not found.',
            data: [],
            errors: false,
            success: true,
        }
    }
    return {
        status: 200,
        message: 'Option is disabled.',
        data: [],
        errors: false,
        success: true,
    }
}