
import Survey from "../model/model";
import { IGetSurveyDetail } from "../types";

export const surveyDetail = async (
  getSurveyQueryData: IGetSurveyDetail
): Promise<{ status: number; message: string; data: any; errors: boolean; success: boolean }> => {
  const { surveyId, createdBy, surveyName } = getSurveyQueryData;

  try {
    const surveyData = await Survey.findAll({
      where: {
        surveyStatus: "draft",
        surveyId: surveyId,
        createdBy: createdBy,
        surveyName: surveyName,
      },
      include: [
        {
          model: Survey,
          as: "Survey",
        },
      ],
    });

    if (!surveyData) {
      return {
        status: 404,
        message: "Survey not found.",
        data: null,
        errors: true,
        success: false,
      };
    }

    return {
      status: 200,
      message: "Survey Detail.",
      data: surveyData,
      errors: false,
      success: true,
    };
  } catch (error) {
    console.error("Error fetching survey detail:", error);
    return {
      status: 500,
      message: "Internal Server Error.",
      data: null,
      errors: true,
      success: false,
    };
  }
};
