/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
    for (const key in obj) {
            const val = obj[key]
            delete obj[key]
            obj[val] = key
        }
    return obj
}
