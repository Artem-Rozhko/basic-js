const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arrAddition = '';
  let res = '';
  if (!options.hasOwnProperty('additionSeparator')) {
    options.additionSeparator = '|';
  }
  if (options.hasOwnProperty('addition')) {
    if (options.hasOwnProperty('additionRepeatTimes')) {
      for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
        arrAddition += options.addition + options.additionSeparator
      }
    }
    arrAddition += options.addition
  }

  if (!options.hasOwnProperty('separator')) {
    options.separator = '+';
  }
  if (options.hasOwnProperty('repeatTimes')) {
    for (let i = 0; i < options.repeatTimes - 1; i++) {
      res += str + arrAddition + options.separator
    }
    res += str + arrAddition
  } else {
    return res = str + arrAddition;
  }

  return res;
}

module.exports = {
  repeater
};
