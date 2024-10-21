// Interface for updating a survey
export interface IUpdateSurvey {
    surveyId: string;
    userId: string;
    surveyName: string;
    surveyDescription: string;
  }
  
  // Interface for adding a question to a survey
  export interface IAddQuestion {
    surveyId: string;
    questionId: number;
    questionType: number;
    questionText: string;
    createdBy: string;
    options: IOptionData[];
  }
  
  // Interface for question options
  interface IOptionData {
    optionId: number | null;
    optionName: string | null;
  }
  
  // Interface for retrieving survey details by ID
  export interface IGetSurveyById {
    surveyId: string;
    userId: string | number;
  }
  
  // Interface for deleting an option
  export interface IOptionDeleteData {
    optionId: number;
    userId:  string;
  }
  