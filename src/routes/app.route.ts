import { Router } from "express";
import { solveWaterJugRiddle } from "../controllers";
import { validateFields } from "../helpers";

const router = Router()

router.post('/', validateFields, solveWaterJugRiddle)

export default router