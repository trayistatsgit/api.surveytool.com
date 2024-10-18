import { createSurveyId } from "./createSurveyId.service";
import { getSurveyById } from "./getSurveyById.service";
import { surveyOptionSoftDelete } from "./surveyOptionSoftDelete.service";
import { updateSurvey } from "./updateSurvey.service";
import { upsertSurveyQuestions } from "./upsertSurveyQuestions.service";
import {surveyDetail} from "./surveyDetail.service"
const surveyService = {
    createSurveyId,
    updateSurvey,
    upsertSurveyQuestions,
    getSurveyById,
    surveyOptionSoftDelete,
    surveyDetail
}
export default surveyService;