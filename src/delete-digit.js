const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from(n.toString());
  let newArr;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    newArr = arr.slice(0);
    newArr.splice(i, 1)
    res.push(+newArr.join(''))
  }
  return Math.max(...res);
}

module.exports = {
  deleteDigit
};
