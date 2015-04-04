'use strict';

var assert = require('assert'),
    Selector = require('./');

describe('Selector', function () {
    it('should return an object', function () {
        var selector = new Selector('body', [ 0, 0, 0, 1 ]);
        console.log(selector);
        assert(selector);
        assert.equal(selector.text, 'body');
        assert.deepEqual(selector.spec, [ 0, 0, 0, 1 ]);
    });
});

describe('Selector.parsed', function () {
    it('should get parsed selector', function () {
        var selector = new Selector('body');
        console.log(selector.parsed());
        assert(selector.parsed());
        assert.equal(selector.parsed()['0'].tag, 'body');
        assert.equal(selector.parsed().length, 1);
    });
});

describe('Selector.specificity', function () {
    it('should get specificity', function () {
        var selector = new Selector('body');
        console.log(selector.specificity());
        assert.deepEqual(selector.specificity(), [ 0, 0, 0, 1 ]);
    });
});
