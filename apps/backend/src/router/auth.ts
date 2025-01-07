import { Router, Request, Response } from "express";
import passport from "passport";
import db from "@repo/db/client"
import jwt from "jsonwebtoken";
import { COOKIE_MAX_AGE } from "../consts";

const router = Router()

const CLIENT_URL = process.env.FRONTEND_URL ?? 'http://localhost:5173';
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';


interface userJwtClaims {
    userId: number;
    name: string;
    isGuest?: boolean;
}
interface UserDetails {
    id: number;
    token?: string;
    name: string;
    isGuest?: boolean;
}

router.get('/refresh', async (req: Request, res: Response) => {
    if (req.user) {
      const user = req.user as UserDetails;
      console.log(user);
      
      const userDb = await db.user.findFirst({
        where: {
          id: user.id,
        },
      });
  
      const token = jwt.sign({ userId: user.id, name: userDb?.name, email : userDb?.email }, JWT_SECRET);

      res.json({
        token ,
        id: user.id,
        name: userDb?.name,
      });
    
    } else {
      res.status(401).json({ success: false, message: 'Unauthorized' });
    }
});

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
