const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 
  if (!Array.isArray(arr)) throw Error;

  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (newArray.length && arr[i - 2] !== '--discard-next') newArray.pop();
        continue;
        
      case '--discard-next':
        i++;
        continue;

      case '--double-prev':
        if (i && arr[i - 2] !== '--discard-next') newArray.push(arr[i - 1]);
        continue;

      case '--double-next':
        if (i < arr.length - 1) newArray.push(arr[i + 1]);
        continue;
      default:
        newArray.push(arr[i]);
    }
  }

  return newArray;
}
