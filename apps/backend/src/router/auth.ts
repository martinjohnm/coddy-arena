import { Router, Request, Response, NextFunction } from "express";
import passport from "passport";
import { authRefresh, getUser, logoutUser, userRegister, verifyEmail } from "../controllers/user/authController";
import { generateAndGetToken } from "../utils/generateAndGetToken";

const router = Router()

const CLIENT_URL = process.env.FRONTEND_URL ?? 'http://localhost:5173';


router.get('/refresh', authRefresh);
router.get('/verify', verifyEmail);
router.get('/getUser', getUser);
router.post('/login', (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (err : any, user : any, info : any) => {
        if (err) return res.status(500).json({ message: 'Authentication error' , success : false});
        if (!user) return res.status(401).json({ message: 'Invalid credentials' , success : false});

        req.login(user, (loginErr) => {
            if (loginErr) return res.status(500).json({ error: 'Login failed' });
            // Send redirect information as part of the response
            const token = generateAndGetToken(user)
            res.cookie("coddy-cookie", token, { httpOnly: true, secure: false });
            res.json({ success : true, token, message : "login successful"  });
        });
    })(req, res, next);
});

router.post("/logout", logoutUser)

router.get("/login/failed", async (req, res) => {
    res.status(400).json({
        message : "Login failed"
    })
})

router.post("/register", userRegister);

router.get(
    '/google',
    passport.authenticate('google', {
         scope: ['profile', 'email'] 
}),
);

router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: `${CLIENT_URL}/login/failed`,
    }),
    (req, res) => {
        const token = generateAndGetToken(req.user)
        res.cookie("coddy-cookie", token, { httpOnly: true, secure: false });
        res.redirect(CLIENT_URL); // Redirect to frontend
      }
    );

export default router
