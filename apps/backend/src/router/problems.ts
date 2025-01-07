import { Router, Request, Response } from "express";
import { userMiddleWare } from "../middlewares/userMiddleWare";
import { getAllProblmes, getProblemById } from "../controllers/user/problemsController";

const router = Router()

router.get("/all", userMiddleWare, getAllProblmes)
router.get("/:id", userMiddleWare, getProblemById)

export default router