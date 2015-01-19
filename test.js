var Lab = require('lab');
var lab = exports.lab = Lab.script();
var convert = require('./base-n');
var expect = require('expect');
lab.test('conversion from 1001 in binary should be equal to 9 in decimal', function(done) {
    expect(convert.convertToDec('1001', '01')).toEqual(9);
    done();
});
        
lab.test('convertFromDec should work for any base', function(done) {
    expect(convert.convertFromDec(7, '01')).toEqual('111');
    expect(convert.convertFromDec(0xFF, '01')).toEqual('11111111');
    expect(convert.convertFromDec(0xFFF, '01')).toEqual('111111111111');
    expect(convert.convertFromDec(0xF1, '01')).toEqual('11110001');
    expect(convert.convertFromDec(6, 'fh^')).toEqual('^f');
    expect(convert.convertFromDec(255, '0123456789abcdef')).toEqual('ff');
    expect(convert.convertFromDec(064, '01234567')).toEqual('64');
    expect(convert.convertFromDec(0xf43cde678ad4, '0123456789abcdef')).toEqual('f43cde678ad4');
    done();
});
