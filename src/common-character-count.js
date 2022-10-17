const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let maxStr;
  let minStr;
  let str1 = s1.split('');
  let str2 = s2.split('');

  if (s1.length == s2.length) {
    maxStr = str1;
    minStr = str2;
  } else {
    maxStr = str1.length > str2.length ? str1 : str2;
    minStr = str1.length < str2.length ? str1 : str2;
  }

  for (const letter of minStr) {
    if (maxStr.includes(letter)) {
      maxStr.splice(maxStr.indexOf(letter), 1);
      count++;
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
