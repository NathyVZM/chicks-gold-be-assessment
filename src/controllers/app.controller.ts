import { Request, Response } from "express"
import { getExplanation, validateBuckets } from "../helpers"
import { Body } from "../models"
import { getFormatedBody } from "../utils/"

const VALIDATION_TYPES = {
    STRING: 'string',
    BOOLEAN: 'boolean'
}

export const solveWaterJugRiddle = async (req: Request, res: Response) => {
    try {
        const { bucketX, bucketY, amountWantedZ, xName, yName }: Body = getFormatedBody(req.body)

        if (typeof validateBuckets(bucketX, bucketY, amountWantedZ) === VALIDATION_TYPES.STRING) {
            const message = validateBuckets(bucketX, bucketY, amountWantedZ)
            return res.status(400).json({ message })
        }

        const explanationX = getExplanation(bucketX, bucketY, amountWantedZ, xName, yName)
        const explanationY = getExplanation(bucketY, bucketX, amountWantedZ, yName, xName)

        const explanation = explanationX.length <= explanationY.length ? explanationX : explanationY
        console.table(explanation)
        return res.status(200).json({ bucketX, bucketY, amountWantedZ, explanation })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}