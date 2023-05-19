import { Router } from "express";
import { getWaterJug } from "../controllers";

const router = Router()

router.post('/', getWaterJug)

export default router