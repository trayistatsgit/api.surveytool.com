import { createSurveyId } from "./createSurveyId.service";
import { getSurveyById } from "./getSurveyById.service";
import { surveyAttempt } from "./surveyAttempt.service";
import { surveyOptionSoftDelete } from "./surveyOptionSoftDelete.service";
import { updateSurvey } from "./updateSurvey.service";
// import { uploadSurveyLogo } from "./uploadSurveyLogo.service";
import { upsertSurveyQuestions } from "./upsertSurveyQuestions.service";

const surveyService = {
    createSurveyId,
    updateSurvey,
    upsertSurveyQuestions,
    getSurveyById,
    surveyOptionSoftDelete,
    surveyAttempt,
    // uploadSurveyLogo
}
export default surveyService;