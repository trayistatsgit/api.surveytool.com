import { createSurveyId } from "./createSurveyId.service";
import { getSurveyById } from "./getSurveyById.service";
import { surveyOptionSoftDelete } from "./surveyOptionSoftDelete.service";
import { updateSurvey } from "./updateSurvey.service";
import { upsertSurveyQuestions } from "./upsertSurveyQuestions.service";

const surveyService = {
    createSurveyId,
    updateSurvey,
    upsertSurveyQuestions,
    getSurveyById,
    surveyOptionSoftDelete
}
export default surveyService;