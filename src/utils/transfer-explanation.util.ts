import { Bucket, Explanation } from "src/models";
import { cleanFieldName } from "./clean-field-name.util";

export const createTransferExplanation = (explanation: Explanation[], bucketX: Bucket, bucketY: Bucket, xName: string, yName: string, transferX = false) => {
    if (transferX) bucketY.setCurrent = bucketY.getCurrent - bucketX.transfer(bucketY.getCurrent)
    else bucketX.setCurrent = bucketX.getCurrent - bucketY.transfer(bucketX.getCurrent)

    explanation.push({ [cleanFieldName(xName)]: bucketX.getCurrent, [cleanFieldName(yName)]: bucketY.getCurrent, explanation: `Transfer ${xName} to ${yName}` })
    return explanation
}