
import { Request, Response } from "express";
import db from "@repo/db/client"
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';


interface UserDetails {
    id: number;
    token?: string;
    name: string;
    isGuest?: boolean;
}

export const authRefresh = async (req: Request, res: Response) => {
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
}

export const verifyEmail = async (req : Request, res : Response) => {
   
  const { email } = req.query;

  const user = await db.user.findFirst({
    where : {
      email : String(email)
    }
  })

  if (user) {
    user.isVerified = true; // Mark user as verified
    res.send("Your email has been verified! You can now access the dashboard.");
  } else {
    res.status(400).send("Invalid verification link.");
  }
}
