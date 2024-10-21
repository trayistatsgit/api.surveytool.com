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
    questionName: string;
    createdBy: string;
    options: IOptionData[];
}
interface IOptionData {
    optionId: number | null;
    optionText: string | null;
}
export interface IGetSurveyById {
    surveyId: string;
    userId: string | number;
}
export interface IOptionDeletData {
    optionId: number;
    userId: string;
}