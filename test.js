var arr    = require('./index');
var assert = require('assert');
describe('test arr_range', function() {
    it('test begin and end while no type argument', function() {
        assert.deepStrictEqual([1, 2, 3], arr(1, 3))
    });
    it('test begin and end while have l or r type argument', function() {
        assert.deepStrictEqual([2], arr(1, 3,'rl'))
    })
    it('test begin and end while have stepBy type argument', function() {
        assert.deepStrictEqual([2], arr(1, 4,'+3r'))
    })
});
