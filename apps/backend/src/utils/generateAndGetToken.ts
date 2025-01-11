

import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv()
const jwt_secret = process.env.JWT_SECRET


export const generateAndGetToken = (user: any) => {
    const token = jwt.sign({ email: user.email , id : user.id},String(jwt_secret) );
    return token
  };
export const getUserFromToken : any = (token : string) => {
  const user = jwt.decode(token)
  return user 
}