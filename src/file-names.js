const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let arr = [];
  let count = 1;
  let word;
  for (let i = 0; i < names.length; i++) {
    word = names[i] + '(' + `${count}` + ')';
    console.log(word)

    if (!arr.includes(names[i])) {
      arr.push(names[i])
    }
    else if (names.slice(0, i).includes(word)) {
      arr.push(names[i] + '(' + `${count + 1}` + ')')
    }

    else if (arr.includes(names[i])) {
      arr.push(word)
    }
  }
  return arr;
}

module.exports = {
  renameFiles
};
