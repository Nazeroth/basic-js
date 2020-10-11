const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
  
    for (let i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i])){
        let depth = this.calculateDepth(arr[i]);
        if (counter < (depth += 1)){
          counter = depth;
        }
      }
    }
    return counter;
  }
};