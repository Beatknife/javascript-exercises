const removeFromArray = function(array, ...multipleArgs) {
    
    multipleArgs.forEach((eachArg) => {
        
        for (let i = 0; i < array.length; i++) {
            if( array[i] === eachArg){
                array.splice(i, 1);
            } 
            
        }  
    });

    return array;
}

// Do not edit below this line
module.exports = removeFromArray;

