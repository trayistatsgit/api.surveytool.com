// utils/ServiceResponse.ts

export interface ServiceResponse {
    status: number;
    data: any; // You can further restrict this type if needed
    message: string;
    errors?: boolean;
    version?: string;
    success?: boolean;
  }
  