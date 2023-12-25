import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import CustomToken from '@/model/token';

const getCurrentEpochTime = (): number => {
    return Math.floor(new Date().getTime() / 1000);
};

const BACKEND_ACCESS_TOKEN_LIFETIME = 60 * 60; // 60 minutes
const BACKEND_REFRESH_TOKEN_LIFETIME = 1 * 24 * 60 * 60; // 1 days

interface SignInHandlers {
    credentials: (user: any, account: any, profile: any, email: any, credentials: any) => Promise<boolean>;
    google: (user: any, account: any, profile: any, email: any, credentials: any) => Promise<boolean>;
}

const SIGN_IN_HANDLERS: SignInHandlers = {
    credentials: async (user, account, profile, email, credentials) => {
        return true;
    },
    google: async (user, account, profile, email, credentials) => {
        try {
            const response = await fetch(`${process.env.NEXTAUTH_BACKEND_URL}auth/google/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_token: account['id_token'],
                }),
            });

            if (response.ok) {
                const data = await response.json();
                account['meta'] = data;
                return true;
            } else {
                console.error('Failed to fetch Google provider data:', response.statusText);
                return false;
            }
        } catch (error) {
            console.error('Error during Google provider fetch:', error);
            return false;
        }
    },
};
const SIGN_IN_PROVIDERS: Array<keyof typeof SIGN_IN_HANDLERS> = Object.keys(
    SIGN_IN_HANDLERS
) as Array<keyof typeof SIGN_IN_HANDLERS>;

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge: BACKEND_REFRESH_TOKEN_LIFETIME,
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials: any, req: any) {
                try {
                    const response = await fetch(`${process.env.NEXTAUTH_BACKEND_URL}v1/auth/login/`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(credentials),
                    });

                    if (response.ok) {
                        const data = await response.json();
                        return data;
                    } else {
                        console.error('Failed to fetch credentials:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error during credentials fetch:', error);
                }
                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }: any) {
            if (!SIGN_IN_PROVIDERS.includes(account.provider)) return false;
            return SIGN_IN_HANDLERS[account.provider as keyof typeof SIGN_IN_HANDLERS](
                user,
                account,
                profile,
                email,
                credentials
            );
        },
        async jwt({ user, token, account }: any) {
            if (user && account) {
                let backendResponse = account.provider === 'credentials' ? user : account.meta;
                const customToken: CustomToken = {
                    user: backendResponse.user,
                    access_token: backendResponse.access,
                    refresh_token: backendResponse.refresh,
                    ref: getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME,
                    is_admin: backendResponse.user.is_admin
                };

                return customToken;
            }
            if (getCurrentEpochTime() > token['ref']) {
                try {
                    const response = await fetch(
                        `${process.env.NEXTAUTH_BACKEND_URL}auth/token/refresh/`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ refresh: token['refresh_token'] }),
                        }
                    );

                    if (response.ok) {
                        const data = await response.json();
                        token['access_token'] = data.access;
                        token['refresh_token'] = data.refresh;
                        token['ref'] = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME;
                    } else {
                        console.error('Failed to refresh token:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error during token refresh:', error);
                }
            }
            return token;
        },
        async session({ token }: any) {
            return token;
        },
    },
};

export default authOptions;
