import SurveyQuestion from '../../question/model/question.model';
import { ServiceResponse } from '../../helpers/responseHandler';
import { IAddQuestion } from '../types';
import SurveyOption from '../../question/model/option.model';

export const upsertSurveyQuestions = async (questionData: IAddQuestion): Promise<ServiceResponse> => {
    const { surveyId, questionId, questionText, questionType, createdBy, options } = questionData;
    if (!surveyId || !questionText || !questionType) {
        return {
            status: 400,
            message: 'Survey ID, question name, or question type is missing',
            data: [],
            errors: true,
            success: false,
        };
    }
    const whereCondition: { [key: string]: unknown } = {
        surveyId: surveyId,
    };
    if (questionId) {
        whereCondition.questionId = questionId;
    } else {
        whereCondition.questionName = questionText;
    }
    const [questions, created] = await SurveyQuestion.findOrCreate({
        where: whereCondition,
        defaults: {
            surveyId: surveyId,
            questionName: questionText,
            questionTypeId: questionType,
            createdBy: createdBy,
        },
    });
    let upsertedOptionData: { optionId: number; optionText: string; }[] = []
    if (created) {
        if (options && options.length > 0) {
            upsertedOptionData = await Promise.all(options.map(async (option) => {
                const optionWhereCondition: { [key: string]: unknown } = {
                    surveyId: surveyId,
                    questionId: questions.questionId,
                };
                if (option.optionId) {
                    optionWhereCondition.optionId = option.optionId;
                } else {
                    optionWhereCondition.optionText = option.optionName;
                }

                const [optionData, created] = await SurveyOption.findOrCreate({
                    where: optionWhereCondition,
                    defaults: {
                        surveyId: surveyId,
                        questionId: questions.questionId,
                        optionText: option.optionName,
                        createdBy: createdBy,
                    },
                });
                if (!created) {
                    optionData.optionText = option.optionName;
                    optionData.updatedBy = createdBy;
                    await optionData.save();
                }
                const { optionId, optionText } = optionData;
                return { optionId, optionText };
            }));
        }
        const { surveyId: sId, questionId: qId, questionName, questionTypeId } = questions;
        const formatedData = {
            surveyId: sId, questionId: qId, questionText: questionName, questionType: questionTypeId, options: upsertedOptionData
        }
        return {
            status: 200,
            message: 'Question created with options',
            data: formatedData,
            errors: false,
            success: true,
        };
    }
    // Update existing question
    questions.questionName = questionText;
    questions.questionTypeId = questionType;
    questions.updatedBy = createdBy;
    await questions.save();
    return {
        status: 200,
        message: 'Question updated',
        data: questions,
        errors: false,
        success: true,
    };
};
