import jwt from 'jsonwebtoken';
import { jwtConfig } from '../../config/config';

export const generateToken = (userId: number, email: string): string => {
    if (!jwtConfig.secretKey) {
        throw new Error('JWT secret key is undefined');
    }
    return jwt.sign({ userId, email }, jwtConfig.secretKey, { expiresIn: '1d' });
};

export const verifyToken = (token: string): any => {
    if (!jwtConfig.secretKey) {
        throw new Error('JWT secret key is undefined');
    }
    try {
        return jwt.verify(token, jwtConfig.secretKey);
    } catch (error) {
        return null; 
    }
};
