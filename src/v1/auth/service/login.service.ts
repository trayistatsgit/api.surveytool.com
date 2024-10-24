import { ServiceResponse } from "../../helpers/responseHandler";
import User from "../model/model";
import bcrypt from "bcrypt"; 
import messages from '../../message/messages';
import { ILoginData } from "../type";

export const login = async (loginData: ILoginData): Promise<ServiceResponse<{ user: { email: string } } | null>> => {
  const { email, password } = loginData;

  try {
    const user = await User.findOne({
      where: { email },
      attributes: ['email', 'password'],
    });

    if (!user) {
      return {
        success: false,
        status: 401, 
        message: messages.CREDENTIALS_MSG, 
        errors: true,
        data: null,
      };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return {
        success: false,
        status: 401, 
        message: messages.CREDENTIALS_MSG, 
        errors: true,
        data: null,
      };
    }
    return {
      success: true,
      status: 200,
      message: messages.LOGIN_MSG,
      errors: false,
      data: {
        user: {
          email: ""
        },
        
      },
    };
  } catch (error) {
    console.error('Login error:', error); 
    return {
      success: false,
      status: 500,
      message: messages.SERVER_MSG, 
      errors: true,
      data: null,
    };
  }
};
