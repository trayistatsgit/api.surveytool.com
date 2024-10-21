import Survey from "../model/model"; // Adjust the path to your Survey model
import { ServiceResponse } from "../../helpers/responseHandler"; // Adjust the path to your response handler

export const surveyDetail = async (bodyData?: { surveyId: NumberConstructor; surveyName: string; createdAt: Date; isActive: any; }): Promise<ServiceResponse> => {
  try {
    // Fetch survey data from the database
    const surveys = await Survey.findAll({
      attributes: ['id', 'surveyName', 'surveyStatus', 'isActive', 'createdAt'], // Specify the attributes to retrieve
    });

    return {
      status: 200,
      message: "Surveys fetched successfully.",
      data: surveys,
      errors: false,
      success: true,
    };
  } catch (error: any) {
    console.error("Error fetching surveys:", error);
    return {
      status: 500,
      message: error.message || "Internal Server Error.",
      data: null,
      errors: true,
      success: false,
    };
  }
};
