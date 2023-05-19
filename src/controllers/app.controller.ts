import { Request, Response } from "express"

export const getWaterJug = async (req: Request, res: Response) => {
    console.log(req.body)
    return res.status(200).json({ ...req.body })
}