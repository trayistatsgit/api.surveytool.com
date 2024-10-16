import { ServiceResponse } from "../../helpers/responseHandler";
import questionType from "../model/model";

// Get all question types with structured response
export const getAllQuestionTypes = async (): Promise<ServiceResponse<questionType[]>> => {
  try {
    const questionTypes = await questionType.findAll({
      attributes: ['id', 'name'],
      where: {
        isActive: true,
      },
    });

    // Structure the response
    return {
      success: true,
      status: 200,
      data: questionTypes,
      message: "Question types retrieved successfully",
      errors: false, 
    };
  } catch (error) {
    return {
      success: false,
      status: 500,
      data: [],
      message: error instanceof Error ? error.message : "Error retrieving question types",
      errors: true, 
    };
  }
};
