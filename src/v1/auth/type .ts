export interface SignUpResponse {
    success: boolean;
    status: number;
    message: string;
    errors: boolean;
    data: {
        user?: { id: number; email: string };
        sessionToken?: string;   // Session token for maintaining the user session
        referenceToken?: string;
}
}