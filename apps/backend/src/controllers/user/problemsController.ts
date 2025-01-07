

import { Request, Response } from "express";
import db from "@repo/db/client"
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';



export const getAllProblmes = async (req: Request, res: Response) => {
    res.json({
        me : "hai"
    })
}

export const getProblemById = async (req : Request, res : Response) => {

    const id = Number(req.params.id)
    res.json({
        mes : "prob",
        id
    })
}