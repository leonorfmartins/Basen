// This function will take a string containing the number to be converted and another string containing the character set of the number system it is converting from.

function convertToDec (sourceNumber, sourceCharacters) {
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

// we assume for this function 3 string arguments, a character set for the
// source system, a character set for the target system, and the number in the
// source system (as a string)
function baseToBase (sourceCharacters, targetCharacters, sourceNumber) {
    var sourceBase = sourceCharacters.length;
    var targetBase = targetCharacters.length;

    // replace every position in both string bases with their index position
    // number/value/whatever in decimals take the current number and convert
    // it to decimal, by starting at
    // position 0
}

module.exports = {
    convertToDec: convertToDec
};
