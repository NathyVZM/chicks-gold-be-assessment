import { cleanFieldName, createDumpExplanation, createFillExplanation, createTransferExplanation } from "../utils"
import { Bucket, Explanation } from "../models"

export const getExplanation = (x: number, y: number, z: number, xName: string, yName: string) => {
    const bucketX = new Bucket(x)
    const bucketY = new Bucket(y)
    let explanation: Explanation[] = []

    while (bucketX.getCurrent !== z && bucketY.getCurrent !== z) {
        if (bucketX.isEmpty() && !bucketY.isFull()) explanation = [...createFillExplanation(explanation, bucketX, bucketY, xName, yName)]
        if (bucketX.isEmpty() && bucketY.isFull()) explanation = [...createTransferExplanation(explanation, bucketX, bucketY, yName, xName, true)]
        if (bucketY.isFull()) explanation = [...createDumpExplanation(explanation, bucketX, bucketY, xName, yName)]
        
        explanation = [...createTransferExplanation(explanation, bucketX, bucketY, xName, yName)]
    }

    explanation.push({ [cleanFieldName(xName)]: bucketX.getCurrent, [cleanFieldName(yName)]: bucketY.getCurrent, explanation: 'Solved' })
    return explanation
}