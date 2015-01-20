var fs = require('fs');
var bases = JSON.parse(fs.readFileSync('./bases.json'));

// This function will take a string containing the number to be converted and another string containing the character set of the number system it is converting from.  
function convertToDec(sourceNumber, sourceCharacters) {
    var result = 0;
    var sourceBase = sourceCharacters.length;
    for (var i=0; i < sourceNumber.length; i++) {
        var currentDigit = sourceNumber[i];
        // position is counting from right to left.
        // (position=0 for the rightmost digit.)
        var position = sourceNumber.length - i - 1;
        var characterValue = sourceCharacters.indexOf(currentDigit);
        if (characterValue === -1) {
            throw new Error(currentDigit + ' is not contained within the character set: ' + sourceCharacters);
        }  
        result += Math.pow(sourceBase, position) * characterValue;
    }
    return result;
}

/*
* 1. check if decNumber < TargetBase
* 1.1. if yes, return decNumber
* 2. result = DecNumber / TargetBase
* 3. check if result < TargetBase
* 4. if not, goto 1 and increase psoition.
* 5. if yes, use the result as digit at position
 */   

function convertFromDec(decNumber, targetCharacters) {
    var targetBase = targetCharacters.length;
    if (decNumber < targetBase) {
        // fast path for trivial case: early return  
        return decNumber;
    } 
    var digit;
    var result = [];
    var remaining = decNumber;
    //keep producing digits until the sum of their values
    //equals the decimal input.
    while (remaining > 0) {
        var x = remaining;
        var position = 0;
        //find the most significant digit of the remaining value
        do { 
            if (x >= targetBase) {
                digit = Math.floor(x / targetBase);
                position++;
            } else {
                digit = x;
            }
            if (digit < targetBase) {
                result[position] = digit;
                remaining -= Math.pow(targetBase, position) * digit;
            } else {
                x = digit;
            }
        } while (digit >= targetBase);
    }
    result = result.reverse();
    for (var i = 0; i < result.length; i++) {
        if (result[i] === undefined) {
            result[i] = targetCharacters[0];
        } else {
            result[i] = targetCharacters[result[i]];
        }
    }
    return result.join('');
}



// we assume for this function 3 string arguments, a character set for the
// source system, a character set for the target system, and the number in the
// source system (as a string)
function baseToBase(sourceCharacters, targetCharacters, sourceNumber) {
    var decNumber = convertToDec(sourceNumber, sourceCharacters);
    return convertFromDec(decNumber, targetCharacters);
}
module.exports = {
    convertToDec: convertToDec,
    convertFromDec: convertFromDec,
    baseToBase: baseToBase,
    BASES: bases
};
