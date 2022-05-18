const reverseString = function(string) {
    let container = string.split("");
    container = container.reverse();
    container = container.join("");
    
    return container
};

// Do not edit below this line
module.exports = reverseString;
