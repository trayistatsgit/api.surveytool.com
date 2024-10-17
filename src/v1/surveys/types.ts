export interface IUpdateSurvey{
    surveyId: string;
    userId: string;
    surveyName: string;
    surveyDescription: string;
}
export interface IAddQuestion {
    surveyId: string;
    questionId: number;
    questionType: number;
    questionText: string;
    createdBy: string;
    options: IOptionData[];
}
interface IOptionData {
    optionId: number | null;
    optionName: string | null;
}
export interface IGetSurveyById {
    surveyId: string;
    userId: string | number;
}