const sumAll = function(num1,num2) {
    let sumReturn = 0;
    //return if invalid input
    if(typeof num1 !== "number" || typeof num2 !=="number" || num1<0 || num2<0){
        return "ERROR"
    }
    // do the sum if num1 <num2 
    if(num1<num2){
        //sum loop
        while(num1<=num2){
            sumReturn = sumReturn + num1;
            num1++;
    }
    return sumReturn
}
    // do the sum if num2 <num1 
    if(num2<num1){
        // sum loop
        while(num2<=num1){
            sumReturn = sumReturn + num2;
            num2++;
    }
    return sumReturn;
}
};

// Do not edit below this line
module.exports = sumAll;
