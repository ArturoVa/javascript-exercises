const repeatString = function(string, repetitionNumber) { 
    let repetitionArray = []; // an array that will contain all the repetition 
    if(repetitionNumber<0){
        return 'ERROR'
    }
    for(let i= 0; i<repetitionNumber; i++){
        repetitionArray[i] = string; 
    }
    return repetitionArray.join('');
};

// Do not edit below this line
module.exports = repeatString;
