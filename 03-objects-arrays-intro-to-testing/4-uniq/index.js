/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    let arr_new = []
    if (arr) {
        for (const item of arr) {
            if (!arr_new.includes(item)) {
                arr_new.push(item)
            }
        }
    }
    return arr_new
}
