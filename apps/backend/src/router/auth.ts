import { Router } from "express";
import passport from "passport";



const router = Router()

const CLIENT_URL = process.env.FRONTEND_URL ?? 'http://localhost:5173';
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

router.get(
    '/google',
    passport.authenticate('google', {
         scope: ['profile', 'email'] 
}),
);

router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: CLIENT_URL,
        failureRedirect: `${CLIENT_URL}/login/failed`,
    }),
    );

export default router
