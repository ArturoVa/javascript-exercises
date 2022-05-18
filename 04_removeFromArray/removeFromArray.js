const removeFromArray = function(inputArray) {
    //arguments in here, refers to the other arguments given to the function (not counting the inputArray)

    //enter a loop that starts from the second argument taken
    for(let i = 1; i<arguments.length; i++){ 
        
        // enter another loop that loops through the elements inside inputArray
        for(let j = 0; j< inputArray.length;j++ ){ 

             //checks if the argument is equal to an element inside the inputArray 
            if(arguments[i] === inputArray[j]){
                inputArray.splice(j,1); //if true, removes the array
            }
            //otherwise, it doesn't do anything to the inputArray.
        }
    
    }
    return inputArray;
}
// Do not edit below this line
module.exports = removeFromArray;
