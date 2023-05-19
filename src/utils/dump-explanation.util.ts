import { Bucket, Explanation } from "src/models";
import { cleanFieldName } from "./clean-field-name.util";

export const createDumpExplanation = (explanation: Explanation[], bucketX: Bucket, bucketY: Bucket, xName: string, yName: string) => {
    bucketY.empty()
    explanation.push({ [cleanFieldName(xName)]: bucketX.getCurrent, [cleanFieldName(yName)]: bucketY.getCurrent, explanation: `Dump ${yName}` })
    return explanation
}