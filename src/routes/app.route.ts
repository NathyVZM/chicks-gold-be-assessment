import { Router } from "express";
import { solveWaterJugRiddle } from "../controllers";

const router = Router()

router.post('/', solveWaterJugRiddle)

export default router