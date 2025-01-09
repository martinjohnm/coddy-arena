import { Router, Request, Response } from "express";
import passport from "passport";
import { authRefresh, verifyEmail } from "../controllers/user/authController";

const router = Router()

const CLIENT_URL = process.env.FRONTEND_URL ?? 'http://localhost:5173';

router.get('/refresh', authRefresh);
router.get('/verify', verifyEmail);

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
