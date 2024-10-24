import SurveyOption from "../../question/model/option.model";
import SurveyQuestion from "../../question/model/question.model";
import Survey from "../model/model";
import { IGetSurveyById } from "../types"
export const getSurveyById = async (getSurveyQueryData: IGetSurveyById): Promise<any> => {
    const { surveyId, userId } = getSurveyQueryData;
    const surveyData = await Survey.findOne({
        where: {
            surveyId: surveyId,
            isActive: true,
            createdBy: userId
        },
        attributes:['surveyId', 'surveyName', 'surveyDescription', 'totalPage', 'logo'],
        include: [
            {
              model: SurveyQuestion,
              as: 'surveyQuestions',
              attributes: ['questionId', 'questionName', ['questionTypeId', 'questionType']],
              include: [
                {
                  model: SurveyOption,
                  as: 'options',
                  attributes: ['optionId', 'optionText'],
                },
              ],
            },
          ],
    });
    console.log(surveyData)
    return {
        status: 200,
        message: 'Survey updated.',
        data: surveyData,
        errors: false,
        success: true, 
    }

}