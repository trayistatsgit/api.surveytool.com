export interface IUpdateSurvey {
    surveyId: string;
    userId: string;
    surveyName: string;
    fileData: IFileData;
    logo?: string | null;
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


type Option = string | number | number[];

export interface Question {
    questionId: number;
    questionType: number;
    options: Option;
}

export interface IAttemptSurveyBody {
    surveyId: string;
    participantUrl: string;
    questions: Question[];
}
export interface IFileData {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: Buffer;
    size: number;
    surveyId: string;
  }