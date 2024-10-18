import { ServiceResponse } from "../../helpers/responseHandler";

// Assuming you have a function to get the current user's ID
const getCurrentUserId = () => {
    // Replace with actual logic to get the current user ID
    return '1'; // Example user ID
};
export const getAlleditSurvey = async ():Promise<ServiceResponse>  => {
        const surveyCreateData = {
            surveyStatus: "draft",
            isActive: true,
            totalPage: 1,
            createdBy: '1',
            updatedAt: '1'
        }
        const create = await Survey.create(surveyCreateData);
        if(!create){
            return{
                status: 400,
                message: 'Something went wrong.',
                data: [],
                errors: true,
                success: false,
            }
        }
        return{
            status: 200,
            message: 'Survey created successfully',
            data: create,
            errors: false,
            success: true,
        }
};


// import { ServiceResponse } from "../../helpers/responseHandler";
// import questionType from "../model/model";

// // Get all question types with structured response
// export const getAllQuestionTypes = async (): Promise<ServiceResponse<questionType[]>> => {
//     const questionTypes = await questionType.findAll({
//       attributes: ['id', 'name'],
//       where: {
//         isActive: true,
//       },
//     });

//     return {
//       success: true,
//       status: 200,
//       data: questionTypes,
//       message: "Question types retrieved successfully",
//       errors: false, 
//     };
// };
