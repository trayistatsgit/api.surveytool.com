// services/authService.ts
import bcrypt from 'bcryptjs';
import User from '../model/model';
import { SignUpResponse } from '../../type ';
import { generateToken } from '../../../utils/jwt';
import { v4 as uuidv4 } from 'uuid';
const authService = {
    async signUp(email: string, password: string): Promise<SignUpResponse> {
        try {
            
            if (!email || !password) {
                return {
                    success: false,
                    status: 400,
                    message: 'Email and password are required',
                    errors: true,
                    data: {}
                };
            }
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return {
                    success: false,
                    status: 409,
                    message: 'User already exists',
                    errors: true,
                    data: {}
                };
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                email,
                password: hashedPassword,
            });
            const sessionToken = generateToken(user.id, user.email);
            const referenceToken = uuidv4(); 

            const token = generateToken(user.id, user.email);
            return {
                success: true,
                status: 200,
                message: 'User created successfully',
                errors: false,
                data: {
                    user: { id: user.id, email: user.email },
                    sessionToken,                             
                    referenceToken , 
                }
            };
        } catch (error) {
            return {
                success: false,
                status: 500,
                message: 'An error occurred during sign-up',
                errors: true,
                data: {}
            };
        }
    }
};

export default authService;
