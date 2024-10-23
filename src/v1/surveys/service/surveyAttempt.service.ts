import SurveyParticipant from "../model/surveyParticipants.model";
import SurveyParticipantReply from "../model/surveyParticipantsReply.model";

export const surveyAttempt = async (surveyData: any): Promise<any> => {
    const { surveyId, questions,  participantUrl, cookieId, ipAddress } = surveyData; // Get rId from the request body
    const surveyParticipants = [];
    if (!surveyId) {
        return {
            status: 400,
            message: 'Survey Id is missing.',
            data: null,
            errors: false,
            success: true,
        }
    }
    const survey = await SurveyParticipant.findOne({
        where:{
            surveyId,
            deviceId: cookieId
        }
    })
    if(survey){
        return {
            status: 400,
            message: 'Survey allready attempt',
            data: null,
            errors: false,
            success: true,
        }  
    }
    const attemptSurvey = await SurveyParticipant.create({
        surveyId,
        ipAddress: ipAddress,
        participantUrl,
        deviceId: cookieId,
    })
    if (!attemptSurvey) {
        return {
            status: 400,
            message: 'Something went wrong',
            data: null,
            errors: false,
            success: true,
        }
    }
    for (const question of questions) {
        const { questionId, options, questionType } = question;
        let optionId: number[] | null;
        if (Array.isArray(options)) {
            optionId = options;
        } else if (questionType !== 1 && questionType !== 4) {
            optionId = String(options).split(',').map(Number);
        } else {
            optionId = null;
        }
        const optionText = typeof options === 'string' && (questionType === 1 || questionType === 4) ? options : null;
        if (optionId) {
            for (const id of optionId) {
                surveyParticipants.push({
                    surveyId,
                    rId: attemptSurvey.dataValues.id,
                    questionId,
                    optionId: id,
                    optionText: null,
                });
            }
        } else {
            surveyParticipants.push({
                surveyId,
                rId: attemptSurvey.dataValues.id,
                questionId,
                optionId: null,
                optionText,
            });
        }
    }
await SurveyParticipantReply.bulkCreate(surveyParticipants);
    return {
        status: 200,
        message: 'Reacord save successfully.',
        data: [],
        errors: false,
        success: true,
    }
};

