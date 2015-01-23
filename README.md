This module converts a number from any positon based number system into any other number system. A system is defined by a string with an ascending order of characters that represent the digits, thus making it possible to convert to and from made-up or custom number systems.
##Usage
###Conversion from base to base
For example,
`baseToBase("0123456", "sdf234nkjsergs", "2361")`
will convert 2361 (in 7-based system) to this 14-based system.`
###Conversion to decimal
For example,
`convertToDec("1011100011", "01")`
will return this binary number's value in decimal.
###Conversion from decimal
For example,
`convertFromDec("4329", "abcde")`
returns 4329 in a 5-based system.
###Commonly used number systems
The character sets for 
bin,
oct,
dec,
hex,
b84
are provided in bases.json and can be used instead of inputting their respective characters:
`baseToBase(bin, hex, "1010101")`
will convert the binary number to hexadecimal.
