import { ServiceResponse } from "../../helpers/responseHandler";
import User from "../model/model"; // Import the User model
import bcrypt from 'bcrypt';
export const login = async (
  email: string,
  password: string
): Promise<ServiceResponse<{ email: string, password: string }>> => {
  try {
  
    const user = await User.findOne({
      where: { email,password },
      attributes: ['email', 'password'], // Fetch email and hashed password
    });

    if (!user) {
      return {
        success: false,
        status: 404,
        message: "Invalid email or password",
        errors: true,
        data: null,
      };
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return {
        success: false,
        status: 404,
        message: "Invalid email or password",
        errors: true,
        data: null,
      };
    }
    return {
      success: true,
      status: 200,
      message: "Login successful",
      errors: false,
      data: null, 
    };
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: "Failed to authenticate user",
      errors: true,
      data: null,
    };
  }
};
