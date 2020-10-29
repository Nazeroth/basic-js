const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(doublesided = "true") {
    this.doublesided = doublesided;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw Error;
    }

    let messageUpper = message.toUpperCase();
    let keyFull = key.padEnd(message.length, key).toUpperCase();
    let res = "";
    let index = 0;

    for (let i = 0; i < messageUpper.length; i += 1) {
      let charCode = messageUpper.charCodeAt(i);
      if (charCode >= 65 && charCode <= 91) {
        charCode -= 65;
        let encrypted = keyFull.charCodeAt(index) - 65;
        let resCode = ((charCode + encrypted) % 26) + 65;
        res += String.fromCharCode(resCode);
        index++;
      } else {
        res += messageUpper[i];
      }
    }
    return !this.doublesided ? res.split("").reverse().join("") : res;
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw Error;
    }

    let messageUpper = message.toUpperCase();
    let keyFull = key.padEnd(message.length, key).toUpperCase();
    let res = "";
    let index = 0;

    for (let i = 0; i < messageUpper.length; i++) {
      let charCode = messageUpper.charCodeAt(i);
      if (charCode >= 65 && charCode <= 91) {
        charCode -= 65;
        let encrypted = keyFull.charCodeAt(index) - 65;
        let resCode = ((charCode + 26 - encrypted) % 26) + 65;
        res += String.fromCharCode(resCode);
        index++;
      } else {
        res += messageUpper[i];
      }
    }
    return !this.doublesided ? res.split("").reverse().join("") : res;
  }
}

module.exports = VigenereCipheringMachine;
