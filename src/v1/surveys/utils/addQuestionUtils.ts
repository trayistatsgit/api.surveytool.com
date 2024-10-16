import SurveyQuestion from "../../question/model/model"
import { IAddQuestion } from "../types"

export const addQuestionUtils = async (bodyData: IAddQuestion) =>{
    const {surveyId, questionId, questionType, questionName, createdBy} = bodyData
    const create = await SurveyQuestion.findOrCreate({
        where:{
            questionId: questionId,
            surveyId: surveyId,
        },
        defaults:{
            questionName: questionName,
            isActive: 1,
            pageNo: 1,
            createdBy: createdBy, 
            surveyId: surveyId,
            questionTypeId: questionType
        },
    })
}
