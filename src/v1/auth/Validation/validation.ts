import { Request, Response, NextFunction } from 'express';
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const MAX_LENGTH = 30;
const MIN_LENGTH = 8;  
 
export const validateEmail = (req: Request, res: Response, next: NextFunction): void => {
    const email = req.body.email;
 
    if (!email) {
        res.status(400).json({ message: 'Email is required.' });
        return;
    }
 
    if (email.length < MIN_LENGTH || email.length > MAX_LENGTH) {
        res.status(400).json({ message: `Email must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters long.` });
        return;
    }
 
    if (email !== email.toLowerCase() || !emailRegex.test(email)) {
        res.status(400).json({ message: 'Email must be in lowercase and in a valid format (e.g., username@example.com).' });
        return;
    }
 
    next();
};