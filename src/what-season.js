const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null){
    return 'Unable to determine the time of year!'
  }
  
  if ( Object.prototype.toString.call(date) != '[object Date]'){
     throw 'THROWN';
  }
  

  if(date.getMonth() < 2 || date.getMonth() == 11){
    return 'winter'; 
  }
  
  if (date.getMonth() > 1 && date.getMonth() < 5) {
    return 'spring'; 
  }
  if (date.getMonth() > 4 && date.getMonth() < 8 ){
    return 'summer'; 
  }
  if (date.getMonth() > 7 && date.getMonth() < 11){
    return 'autumn';
  }
};
