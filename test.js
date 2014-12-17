var Lab = require('lab');
var lab = exports.lab = Lab.script();
var convert = require('./base-n');
var expect = require('expect');
lab.test('conversion from 1001 in binary should be equal to 9 in decimal', function(done) {
    expect(convert.convertToDec('1001', '01')).toEqual(9);
    done();
});
        

