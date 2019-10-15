var assert = require('assert');
var expect = require('expect');
let search = require('../search')
search = new search();


describe('Z1 -> 1', function () {
    it('should return 1 when the value is z1', function () {
        assert.equal(search.searchInteger('z1'), 1);
    });
});

describe('1Z2 -> 12', function () {
    it('should return 12', function () {
        assert.equal(search.searchInteger('1Z2'), 12);
    });
});

describe('zz12!!!! -> 12', function () {
    it('should return 12', function () {
        assert.equal(search.searchInteger('zz12!!!!'), 12);
    });
});

describe('No Number', function () {
    it('should throw an error when number doesn\'t exist', function () {
        expect(() => search.searchInteger('z').to.throw('No Number'));
    });
});
