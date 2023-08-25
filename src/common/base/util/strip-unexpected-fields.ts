export const stripUnexpectedFields = (
    obj: object,
    expectedProperties: string[],
) => {
    const newObj = { ...obj };

    for (const key in newObj) {
        if (!expectedProperties.includes(key)) {
            delete newObj[key];
        }
    }

    return newObj;
};
