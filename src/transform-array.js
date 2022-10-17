const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let arrCopy = arr.slice()
  for (let i = 0; i < arrCopy.length; i++) {
    if ((arrCopy[i] == '--discard-next' || arrCopy[i] == '--double-next') && (i == arrCopy.length - 1)) {
      arrCopy.splice(i, 1)
    }
    if ((arrCopy[i] == '--discard-prev' || arrCopy[i] == '--double-prev') && (i == 0)) {
      arrCopy.splice(i, 1)
    }

    if (arrCopy[i] == '--double-next') {
      arrCopy[i] = arrCopy[i + 1]
      console.log(i)
    }
    if (arrCopy[i] == '--double-prev') {
      arrCopy[i] = arrCopy[i - 1]
    }

    if (arrCopy[i] == '--discard-next') {
      arrCopy.splice(i, 3)
    }

    if (arrCopy[i] == '--discard-prev') {
      arrCopy.splice(i - 1, 2)
    }
  }
  return arrCopy;
}

module.exports = {
  transform
};
