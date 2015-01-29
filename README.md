#Introduction
This module converts a number from any positon based number system into any other number system. A system is defined by a string with an ascending order of characters that represent the digits, thus making it possible to convert to and from made-up or custom number systems.
##Installation
On your prompt type 
    npm install basen
##Usage
The module takes three strings as arguments: the first containing the string of the number you want to convert, the second being a string with all the characters set of the number's base and the third, all the character's set of the base you want to concert to.
##Examples
###Conversion from decimal to binary
    baseToBase("12", "0123456789", "01")
will convert the decimal based number 12 into the binary system.
###Conversion from base to base
For example,
`baseToBase("0123456", "sdf234nkjsergs", "2361")`
will convert 2361 (in 7-based system) to this 14-based system.`
###Commonly used number systems
Instad of typing the whole character set, there are provided shortcuts for the most commonly used bases, that can be passed as arguments:
bin,
oct,
dec,
hex,
b84
These bases are provided from bases.json and can be used as following:
`baseToBase(bases.bin, bases.hex, "1010101")`
This command will convert the binary number to hexadecimal.
##Authors
*Jan Bölsche
*Julia Friesel
*Leonor Oliveira
##License
Please check the package.json file.
