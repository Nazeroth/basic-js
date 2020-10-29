const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = 0
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 0;
  let additionSeparator = '|';
  if (str === null) {
    str = 'null'
  }
  if (str === true) {
    str = 'true'
  }
  if (options['repeatTimes'] !== undefined ) {
    repeatTimes = options['repeatTimes'] - 1
  }
  if (options['separator'] !== undefined) {
    separator = options['separator'];
  }
  if (options['addition'] !== undefined) {
    addition = options['addition'];
  }
  if (options['additionRepeatTimes'] !== 0) {
    additionRepeatTimes = options['additionRepeatTimes'] - 1;
  }
  if (options['additionSeparator'] !== undefined) {
    additionSeparator = options['additionSeparator'];
  }
  let zeroPattern = str + addition;
  let firstPattern = `${additionSeparator}${addition}`.repeat(additionRepeatTimes);
  let secondPattern = `${separator}${zeroPattern}${firstPattern}`.repeat(repeatTimes);
  
  return zeroPattern + firstPattern + secondPattern;

};
  