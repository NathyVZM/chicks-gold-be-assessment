import { Bucket, Explanation } from "src/models";
import { cleanFieldName } from "./clean-field-name.util";

export const createFillExplanation = (explanation: Explanation[], bucketX: Bucket, bucketY: Bucket, xName: string, yName: string) => {
    bucketX.fill()
    explanation.push({ [cleanFieldName(xName)]: bucketX.getCurrent, [cleanFieldName(yName)]: bucketY.getCurrent, explanation: `Fill ${xName}` })
    return explanation
}