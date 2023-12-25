
interface CustomToken {
    user: {
        pk: number;
        email: string;
        first_name: string;
        last_name: string;
        is_admin: boolean;
        is_active: boolean;
        phone_number: string | null;
        address: string;
    };
    access_token: string;
    refresh_token: string;
    ref: number;
    is_admin: boolean;
    iat?: number;
    exp?: number;
    jti?: string;
}

export default CustomToken;
