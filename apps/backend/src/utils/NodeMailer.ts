

import { configDotenv } from "dotenv";
import nodemailer from "nodemailer";

configDotenv()
const BE_URL = process.env.BACKEND_URL

export const sendVerificationEmail =  async (email : string) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your_email@gmail.com",
        pass: "your_email_password",
      },
    });
  
    const verificationLink = `${BE_URL}/verify?email=${email}`;
  
    await transporter.sendMail({
      from: process.env.COMPANY_EMAIL,
      to: email,
      subject: "Verify Your Email",
      text: `Please verify your email by clicking on the following link: ${verificationLink}`,
    });
  
    console.log(`Verification email sent to ${email}`);
  }
  