const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  let key = '';
  for (let el of domains) {
    let arr = el.split('.').reverse();
    key = '';
    for (let i of arr) {
      key = key + '.' + i;
      if (!(key in res)) {
        res[key] = 1;
      } else {
        res[key] += 1
      }
    };
  }
  return res;
}

module.exports = {
  getDNSStats
};
