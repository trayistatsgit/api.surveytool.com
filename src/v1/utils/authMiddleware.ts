// middleware/authMiddleware.ts
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express'; // Import types
import { jwtConfig } from '../../config/config';

declare global {
    namespace Express {
        interface Request {
            user?: string | number | JwtPayload; 
        }
    }
}

const SECRET_KEY = jwtConfig.secretKey;

if (!SECRET_KEY) {
    throw new Error('JWT secret key is not defined in the configuration.');
}

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        res.sendStatus(401); 
        return; 
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        console.log('Decoded User:', user); 
        if (err) {
            res.sendStatus(403);
            return; 
        }
        req.user = user; 
        next(); 
    });
};
