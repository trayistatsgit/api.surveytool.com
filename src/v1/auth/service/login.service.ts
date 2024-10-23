import { ServiceResponse } from "../../helpers/responseHandler";
import User from "../model/model";
import bcrypt from "bcrypt"; 


export const login = async (email: string, password: string): Promise<ServiceResponse<{ user: { email: string } } | null>> => {
  try {
 
    const user = await User.findOne({
      where: { email },
      attributes: ['email', 'password'],
    });

   
    if (!user) {
      return {
        success: false,
        status: 401, 
        message: "Invalid email or password",
        errors: true,
        data: null,
      };
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return {
        success: false,
        status: 401, 
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
      data: {
        user: { email: user.email }, 
      },
    };
  } catch (error) {
    console.error('Login error:', error); 
    return {
      success: false,
      status: 500,
      message: "Internal server error",
      errors: true,
      data: null,
    };
  }
};
