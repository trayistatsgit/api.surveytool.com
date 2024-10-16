import { ServiceResponse } from "../../helpers/responseHandler";
import Survey from "../model/model";

// Assuming you have a function to get the current user's ID
const getCurrentUserId = () => {
    // Replace with actual logic to get the current user ID
    return '1'; // Example user ID
};
export const createSurveyId = async ():Promise<ServiceResponse>  => {
        const surveyCreateData = {
            surveyStatus: "draft",
            isActive: true,
            totalPage: 1,
            createdBy: '1'
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
