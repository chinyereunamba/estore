import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

const SIGN_IN_HANDLERS = {
    'credentials': async (user, account, profile, email, credentials) => {
        return true
    },
    "google": async (user, account, profile, email, credentials) => {
        try {
            const response = await axios({
                method: "post",
                url: process.env.NEXTAUTH_BACKEND_URL + "auth/google/",
                data: {
                    access_token: account["id_token"]
                },
            });
            account["meta"] = response.data;
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

const getCurrentEpochTime = () => {
    return Math.floor(new Date().getTime() / 1000);
};

const BACKEND_ACCESS_TOKEN_LIFETIME = 60 * 60;            // 60 minutes
const BACKEND_REFRESH_TOKEN_LIFETIME = 1 * 24 * 60 * 60;  // 1 days

const SIGN_IN_PROVIDERS = Object.keys(SIGN_IN_HANDLERS)

export const authOptions = {
    session: {
        strategy: 'jwt',
        maxAge: BACKEND_REFRESH_TOKEN_LIFETIME
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try {
                    const response = await fetch(process.env.NEXTAUTH_BACKEND_URL + 'v1/auth/login/', {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    const data = await response.json();
                    if (data) return data;
                } catch (error) {
                    console.error(error);
                }
                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (!SIGN_IN_PROVIDERS.includes(account.provider)) return false;
            return SIGN_IN_HANDLERS[account.provider](
                user, account, profile, email, credentials
            );
        },
        async jwt({ user, token, account }) {
            // If `user` and `account` are set that means it is a login event
            if (user && account) {
                let backendResponse = account.provider === "credentials" ? user : account.meta;

                token["user"] = backendResponse.user;
                token["access_token"] = backendResponse.access;
                token["refresh_token"] = backendResponse.refresh;
                token["ref"] = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME;
                return token;
            }
            if (getCurrentEpochTime() > token["ref"]) {
                const response = await fetch(`${process.env.NEXTAUTH_BACKEND_URL}auth/token/refresh/`, {
                    method: "POST",
                    body: JSON.stringify({ refresh: token['refresh_token'] }),
                    headers: {
                        'Content-Type': "application/json"
                    }
                });
                token["access_token"] = response.data.access;
                token["refresh_token"] = response.data.refresh;
                token["ref"] = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME;
            }
            return token;
        },
        async session({ token }) {
            return token;
        },
    }
}

export default authOptions