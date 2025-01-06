import { configDotenv } from "dotenv";
import passport from "passport";
import db from "@repo/db/src/index"


const GoogleStrategy = require("passport-google-oauth20").Strategy;
const CALLBACK_URL = process.env.BACKEND_URL


configDotenv();
const GOOGLE_CLIENT_ID =
  process.env.GOOGLE_CLIENT_ID || 'your_google_client_id';
const GOOGLE_CLIENT_SECRET =
  process.env.GOOGLE_CLIENT_SECRET || 'your_google_client_secret';


export function initPassport() {
    if (
        !GOOGLE_CLIENT_ID || 
        !GOOGLE_CLIENT_SECRET
    ) {
        throw new Error(
            'Missing environment variables for authentication providers',
        )
    }

    passport.use(
        new GoogleStrategy(
            {
                clientID: GOOGLE_CLIENT_ID,
                clientSecret: GOOGLE_CLIENT_SECRET,
                callbackURL: `${CALLBACK_URL}/auth/google/callback`,
            },
         
            
        )
    )
}


