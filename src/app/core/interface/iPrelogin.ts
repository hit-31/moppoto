

export interface LogInObject {
    success: boolean;
    responseData: LogInResponseData;
    message: string;
}

export interface LogInResponseData {
    id: string;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    profile_pic: string;
    facebook_id: string;
    google_id: string;
    os: string;
    device_id: string;
    newsletter_subscription: string;
    is_active: string;
    created_at: string;
    updated_at?: any;
    deleted_at?: any;
}