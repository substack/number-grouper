var grouper = require('../');
var test = require('tap').test;

test('default mark integers', function (t) {
    t.equal(grouper(1), '1');
    t.equal(grouper(12), '12');
    t.equal(grouper(123), '123');
    t.equal(grouper(1234), '1,234');
    t.equal(grouper(12345), '12,345');
    t.equal(grouper(123456), '123,456');
    t.equal(grouper(1234567), '1,234,567');
    t.equal(grouper(12345678), '12,345,678');
    t.equal(grouper(123456789), '123,456,789');
    t.end();
});

test('custom mark integers', function (t) {
    var o = { mark : '.' };
    t.equal(grouper(1, o), '1');
    t.equal(grouper(12, o), '12');
    t.equal(grouper(123, o), '123');
    t.equal(grouper(1234, o), '1.234');
    t.equal(grouper(12345, o), '12.345');
    t.equal(grouper(123456, o), '123.456');
    t.equal(grouper(1234567, o), '1.234.567');
    t.equal(grouper(12345678, o), '12.345.678');
    t.equal(grouper(123456789, o), '123.456.789');
    t.end();
});

test('default mark radix decimals', function (t) {
    t.equal(grouper(0.1), '0.1');
    t.equal(grouper(0.12), '0.12');
    t.equal(grouper(0.123), '0.123');
    t.equal(grouper(0.1234), '0.1234');
    t.equal(grouper(0.12345), '0.12345');
    t.equal(grouper(0.123456), '0.123456');
    t.equal(grouper(0.1234567), '0.1234567');
    t.equal(grouper(0.12345678), '0.12345678');
    t.equal(grouper(0.123456789), '0.123456789');
    t.end();
});
