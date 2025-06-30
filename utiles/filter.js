export const filterArr = (array, filterBy, condition, value) => {

    // types validation 

    if (!Array.isArray(array))
        throw new TypeError("First arg must be an array");
    if (filterBy === undefined || value === undefined || condition === undefined)
        return array;


    const validCondition = [
        '=',
        '!=',
        '>',
        '<',
        '>=',
        '<=',
    ]
    if (!validCondition.includes(condition))
        throw new Error('Invalid condition,only one of', validCondition.join(', '))

    const filterByLower = filterBy.toLowerCase();
    const valueLower = typeof value === 'string' ? value.toLowerCase() : value


    return array.filter(item => {
        const currentItem = item[filterByLower];
        typeof currentItem === 'string' ? currentItem.toLowerCase() : currentItem

        switch (condition) {
            case '=':
                return currentItem === valueLower;
            case ' !=':
                return currentItem !== valueLower;
            case ">":
                return currentItem > valueLower;
            case "<":
                return currentItem < valueLower;
            case ">=":
                return currentItem >= valueLower;
            case "<=":
                return currentItem <= valueLower;
            default:
                false

        }
    })
}