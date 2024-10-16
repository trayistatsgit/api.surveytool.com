import { ServiceResponse } from "../../helpers/responseHandler";
import questionType from "../model/model";

// Get all question types with structured response
export const getAllQuestionTypes = async (): Promise<ServiceResponse<questionType[]>> => {
    const questionTypes = await questionType.findAll({
      attributes: ['id', 'name'],
      where: {
        isActive: true,
      },
    });

    return {
      success: true,
      status: 200,
      data: questionTypes,
      message: "Question types retrieved successfully",
      errors: false, 
    };
};
