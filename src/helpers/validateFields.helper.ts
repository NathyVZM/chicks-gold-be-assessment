import { Request, Response, NextFunction } from "express"
import { Body } from "../models"

export const validateFields = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { bucketX, bucketY, amountWantedZ, xName, yName }: Body = req.body

        if (!bucketX || !bucketY || !amountWantedZ || !xName || !yName) {
            return res.status(400).json({
                message: 'Insufficient information to solve the Water Jug Riddle'
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error'
        })
    }

    return next()
}