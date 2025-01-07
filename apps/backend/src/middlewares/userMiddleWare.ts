
import { Request, Response, NextFunction } from "express"


export const userMiddleWare = (req : Request, res : Response, next : NextFunction) => {
    try {
            if (!req.user) {
                res.status(401).json({ success: false, message: 'Unauthorized' });
                return
            }
        next()
    } catch(e) {

    }


}