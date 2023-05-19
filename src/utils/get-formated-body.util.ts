import { Body } from "../models"

export const getFormatedBody = (body: Body) => {
    const { bucketX, bucketY, amountWantedZ, xName, yName }: Body = body

    const bucketXInt = Math.round(bucketX)
    const bucketYInt = Math.round(bucketY)
    const amountWantedZInt = Math.round(amountWantedZ)

    return { bucketX: bucketXInt, bucketY: bucketYInt, amountWantedZ: amountWantedZInt, xName, yName }
}