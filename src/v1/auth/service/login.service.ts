import { ServiceResponse } from "../../helpers/responseHandler";
import User from "../model/model";
 
// Get all users with a structured response
export const   login = async (bodyData?: unknown): Promise<ServiceResponse<{ User: any }[]>> => {
  try {
    const users = await User.findAll({
      attributes: ['email', 'password'],
    });
 
    return {
      success: true,
      status: 200,
      message: "Login successful",
      errors: false,
      data:[],
    };
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: "Failed to fetch users",
      errors: true,
      data: [],
    };
  }
};