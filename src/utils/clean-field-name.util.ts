export const cleanFieldName = (name: string) => {
    const lowerCaseName = `${name[0].toLowerCase()}${name.substring(1)}`
    const cleanedName = lowerCaseName.replace(/[^\w]/g, '')
    return cleanedName
}