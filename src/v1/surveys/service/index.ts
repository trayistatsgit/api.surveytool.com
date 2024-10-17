import { createSurveyId } from "./createSurveyId.service";
import { getSurveyById } from "./getSurveyById";
import { updateSurvey } from "./updateSurvey.service";
import { upsertSurveyQuestions } from "./upsertSurveyQuestions";

const surveyService = {
    createSurveyId,
    updateSurvey,
    upsertSurveyQuestions,
    getSurveyById,
}
export default surveyService;