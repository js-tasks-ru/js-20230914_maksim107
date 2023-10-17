/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if (size == 0) {return ''}
    if (size == undefined) {return string}
    let count = 1
    let symbol_pre = NaN
    let new_string = ""
    for (const symbol of string) {
        if (symbol_pre && symbol_pre == symbol) {
            count++
        } else {
            count = 1
        }
        if (count <= size) {
            new_string += symbol
        }
        symbol_pre = symbol
    }
    return new_string
}
