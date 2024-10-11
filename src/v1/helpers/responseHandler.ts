// utils/responseHandler.ts

import { Response } from 'express';
import { ServiceResponse } from '../utils/serviceResponse';

export class ServiceResponseImpl implements ServiceResponse {
  status: number;
  data: any;
  message: string;
  errors?: boolean;
  version?: string;
  success?: boolean;

  constructor({ status, data, message, errors = false, success }: Partial<ServiceResponse>) {
    this.status = status || 200; // Default status is 200
    this.data = data || null; // Default data is null
    this.message = message || ''; // Default message is an empty string
    this.errors = errors;
    this.success = success !== undefined ? success : true; // Default success is true
  }
}

export const responseHandler = (res: Response, responseData: ServiceResponse) => {
  return res.status(responseData.status).send(new ServiceResponseImpl(responseData));
};

export const errorResponseHandler = (res: Response, error: Error): Response => {
  let errorData: unknown = error;
  if (error.stack) {
    errorData = error.stack;
  }
  // Here you can implement your own logging mechanism if needed
  console.error('Error:', errorData);
  
  return responseHandler(res, {
    message: error.message,
    status: 500,
    data: [],
    success: false,
    errors: true,
  });
};
