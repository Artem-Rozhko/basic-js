const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(machine = 'true') {
    this.type = machine;
  }

  encrypt(message, key) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if (!message || !key) throw new Error('Incorrect arguments!');

    //равняю длинну строки key с message
    if (key.length !== message.length) {
      while (key.length <= message.length) {
        key += key;
      }
      key = key.slice(0, message.length);
    }

    // формирование массива зашифрованных символов
    let arrSymbols = [];
    message = message.toUpperCase();
    key = key.toUpperCase();
    let j = 0; // т.к. в message есть пробелы
    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        let index = (alphabet.indexOf(message[i]) + alphabet.indexOf(key[j])) % 26;
        arrSymbols.push(alphabet[index]);
        j = j + 1
      } else {
        arrSymbols.push(message[i]);
      }
    }
    return this.type ? arrSymbols.join('') : arrSymbols.reverse().join('');
  }

  decrypt(message, key) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if (!message || !key) throw new Error('Incorrect arguments!');

    //равняю длинну строки key с message
    if (key.length !== message.length) {
      while (key.length <= message.length) {
        key += key;
      }
      key = key.slice(0, message.length);
    }

    // формирование массива зашифрованных символов
    let arrSymbols = [];
    message = message.toUpperCase();
    key = key.toUpperCase();
    let j = 0; // т.к. в message есть пробелы
    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        let index = (alphabet.indexOf(message[i]) - alphabet.indexOf(key[j]) + 26) % 26;
        arrSymbols.push(alphabet[index]);
        j = j + 1
      } else {
        arrSymbols.push(message[i]);
      }
    }
    return this.type ? arrSymbols.join('') : arrSymbols.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
