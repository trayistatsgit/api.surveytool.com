import Survey from "../model/model"; 
import { ServiceResponse } from "../../helpers/responseHandler"; 

export const surveyDetail = async (queryParams?: { 
  currentPage ?: number; 
  pageSize?: number; 
}): Promise<ServiceResponse> => {
  
  const { currentPage = 1, pageSize = 8 } = queryParams || {}; 

  const offset = (currentPage - 1) * pageSize; 

  const { count: totalCount, rows: surveys } = await Survey.findAndCountAll({
    attributes: ['id', 'surveyId', 'surveyName', 'surveyStatus', 'isActive', 'createdAt'],
    offset, 
    limit: pageSize, 
  });

  const totalPages = Math.ceil(totalCount / pageSize);

  return {
    status: 200,
    message: "Surveys fetched successfully.",
    data: {
      surveys,
      totalCount,
      currentPage,
      totalPages,
    },
    errors: false,
    success: true,
  };
}; 
