var bases = require('./bases.json');
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
    expect(convert.convertFromDec(255, convert.BASES.hex)).toEqual('ff');
    expect(convert.convertFromDec(064, '01234567')).toEqual('64');
    expect(convert.convertFromDec(0xf43cde678ad4, '0123456789abcdef')).toEqual('f43cde678ad4');
    done();
});

lab.test('baseToBase should remove leading zeros', function(done) {
    expect(convert.baseToBase('01', '01', '0001000')).toEqual('1000');
    done();
});

lab.test('baseToBase should have no effect when source and target characters are identical', function(done) {
    expect(convert.baseToBase('01234567890abcdef', '01234567890abcdef', '1234fdce34ff8')).toEqual('1234fdce34ff8');
    expect(convert.baseToBase('01', '01', '10001000')).toEqual('10001000');
    done();
}); 

lab.test('baseToBase should correctly convert from one n-based system to another', function(done) {
    expect(convert.baseToBase('01', '0123456789', '10001000')).toEqual('136');
    done();
});


lab.test("baseToBase should not blow up when confronted with a long base 64 number", function(done) {
    var result = convert.baseToBase(bases.b64, '0123456789', 'AAAAB3NzaC1yc2EAAAADAQABAAABAQCzS9yLPIyUZ0ZrItW8YjeMNC3kYcw82KeMo4jCgTsagWtktbtum0FvaNp0hQ5b0FRha9FLtWN77PxoeIfr9VBQWgqQoXjyQI+z/QSCAiByWekk4Qm8g9eWM+cv7yEOgIvVpli69h/YwECe9MGbrU6vmfSjIpUeyUM84v8K86gimWb2pHSMWvWR6mFk3qo0JZu+JV6wKhfNLyzJXwVIhC7+yd6eUuRyRG9NATnbvUxHxO37XMGn+jVZXxKvsGpy8Y4g1es8G9noZBm+Mn4Wd22RdKfAUrYWS12nQfGJf4aJFxvVl/4y+olFM+HhAcZ6wAQn6p4bGqq5VfbK31QpnKj1');
    console.log(result);
    done();
});
