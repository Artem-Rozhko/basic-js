const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  str: '',

  getLength() {
    return this.str.split('~~').length;
  },
  addLink(value) {
    if (`${value}`.length == 0) value = '';
    if (this.str.length) {
      this.str += "~~" + `( ${(value)} )`;
      return this;
    } else {
      this.str += `( ${(value)} )`;
      return this;
    }
  },
  removeLink(position) {
    if ((position <= 0) || position > this.getLength() || !Number.isInteger(position)) {
      this.str = '';
      throw new Error("You can't remove incorrect link!");
    }
    this.str = this.str.split('~~').filter((el, i) => {
      if (i !== (position - 1)) return el;
    }).join('~~');
    return this;
  },
  reverseChain() {
    this.str = this.str.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let saveStr = this.str;
    this.str = '';
    return saveStr;
  }
};

module.exports = {
  chainMaker
};

