const removeFromArray = function(array, ...multipleArgs) {
    
    return array.filter((item) => !multipleArgs.includes(item))

};


// Do not edit below this line
module.exports = removeFromArray;

