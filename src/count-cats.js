const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    let counter = 0;
    arr.forEach(element => {
        
        const kitten = '^^';
        for (let i = 0; i < element.length; i++) {
            if (element[i] == kitten) {
                counter = counter + 1;
            }
        }
    });
    return counter;
};
