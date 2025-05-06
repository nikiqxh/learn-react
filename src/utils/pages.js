export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalCount) => {
    const result = [];

    for (let i = 0; i < totalCount; i++) {
        result.push(i + 1)
    }

    return result
}