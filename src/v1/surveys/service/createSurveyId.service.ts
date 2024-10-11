import { ServiceResponse } from "../../helpers/responseHandler";
import Survey from "../model/model";

// Assuming you have a function to get the current user's ID
const getCurrentUserId = () => {
    // Replace with actual logic to get the current user ID
    return '1'; // Example user ID
};

export const createSurvey = async ():Promise<ServiceResponse>  => {
    try {
        const surveyCreateData = {
            surveyName: "test",
            surveyDescription: "test",
            surveyStatus: "draft",
            isActive: true,
            totalPage: 1,
            createdBy: '1'
        }
        const create = await Survey.create(surveyCreateData);
        console.log('Survey created successfully:', create);
        return{
            status: 200,
            message: 'Survey created successfully',
            data: create,
            errors: false,
            success: true,
        }
    } catch (error) {
        console.error('Error creating survey:', error);

        return{
            status: 200,
            message: 'Survey created successfully',
            data: [],
            errors: false,
            success: true,
        }
    }
};

// Call the function to create a survey
createSurvey();
