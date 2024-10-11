import { Response } from 'express';
export interface ServiceResponse<T = unknown> {
  status: number;
  data: T; // Use a generic type T for more specific data
  message: string;
  errors: boolean;
  version?: string;
  success: boolean;
}

export class ServiceResponseImpl implements ServiceResponse {
  status: number;
  data: any;
  message: string;
  errors: boolean;
  success: boolean;
  version?: string;

  constructor({ status = 200, data = null, message = '', errors = false, success = true }: Partial<ServiceResponse>) {
    this.status = status;
    this.data = data;
    this.message = message;
    this.errors = errors;
    this.success = success;
  }
}

export const responseHandler = (res: Response, responseData: Partial<ServiceResponse>): Response => {
  const response = new ServiceResponseImpl(responseData);
  return res.status(response.status).json(response);
};

export const errorResponseHandler = (res: Response, error: unknown): Response => {
  if (error instanceof Error) {
      console.error('Error:', error.stack || error.message);
  } else {
      console.error('Unexpected error:', error);
  }

  // Send a structured error response
  return responseHandler(res, {
      message: error instanceof Error ? error.message : "An unexpected error occurred.",
      status: 500,
      data: null,
      success: false,
      errors: true,
  });
};
