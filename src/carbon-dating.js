const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleString) {

  if (typeof(sampleString) != "string") {
    return false;
  }
  number = +sampleString;
  if (typeof(number) != 'number') {
    return false
  }
    if (number <= 0) {
      return false
    }
  if (number >= 15) {
    return false
  }
  if (isNaN(number)) {
  	return false
  }
  
  return Math.ceil((Math.log(MODERN_ACTIVITY/number)/(0.693/HALF_LIFE_PERIOD)))  
};
