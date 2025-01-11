
import { Request, Response } from "express";
import db from "@repo/db/client"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import { getUserFromToken } from "../../utils/generateAndGetToken";

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
        success : true
      });
    
    } else {
      res.json({ success: false, message: 'Unauthorized' });
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

export const userRegister = async (req : Request, res : Response) => {
  try {
      

      const {password, confirmPassword,email} = req.body

      if (password !== confirmPassword) {
          res.status(400).json(
              {
                  success : false,
                  error : "Passwords don't match"
              })
          return
      }

      const existingUser = await db.user.findFirst({
          where : {
              email
          }
      })

      if (existingUser && existingUser.provider == "EMAIL"){
          res.status(400).json(
              {
                  success : false,
                  error : "Email already registered"
              })
          return
      }


      const hashedPassword = await bcrypt.hash(password, 10)

      const newUser = await db.user.upsert({
          create : {
            email,
            password : hashedPassword,
            provider : "EMAIL"

          },
          update : {
            provider : "EMAIL",
            password : hashedPassword
          },
          where : {
            email
          }
      })
      res.status(200).json({
          data : {
              id : newUser.id,
              email : newUser.email
          },

          success : true,
          message : "User created successfully!"
      })
    
  } catch(error) {
      let message
      if (error instanceof Error) message = error.message
      else message = String(error)
      console.log("Error during signup",  message); 
      res.status(500).json(
          {
              success : false,
              error : "Internal server error"
          })
      
  }
}



export const getUser = async (req : Request, res : Response) => {
   
  const cookieToken = req.cookies["coddy-cookie"]


  const user = getUserFromToken(cookieToken)
  console.log(user);
  
  if (!user) {
    res.json({
      success : false,
      message : "not logged in"
    })
  } else {
    res.json({
      success : true,
      message : "success"
    })
  }

}


export const logoutUser = async (req : Request, res : Response) => {
   

  req.logout((err) => {
    if (err) {
      res.status(500).json({ error: 'Failed to log out' });
    } else {
      res.clearCookie("coddy-cookie")
      res.status(200).json({
        message : "Logged out successfully",
        success : true
      })
    }
  })

}
