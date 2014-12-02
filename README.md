User Story
=====

As a developer, I want to have a convenient facctory function that gives me a function that converts a number one base-n positional system to another.
Both systems are defined by a sstring containing all symbols the symbols of the system.

Example, use case

    convert = makeConverter('01', '0123456789abcdef');
    hexDigit = convert('11110011');
    // hexDigit is 'F3' now
