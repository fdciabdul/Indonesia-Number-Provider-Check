const list = require('./src/list.provider')

// find the operator
/**
 * Find Operator Name
 * @date 2022-09-23
 * @param {any} number
 * @returns {any}
 */
exports.operator = (number) => {
  let result = 'Unknown'

  Object.keys(list).forEach((key) => {
    if (number.substring(0, 2) === '62') {
      number = number.replace('62', '0')
    }
    if (list[key].includes(number.substring(0, 4))) {
      result = key
    }
  })
  return result
}
