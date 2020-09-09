const expect = require('chai').expect,
    bar = require('../src/bar').bar;

describe('bar', () => {
    it('should return "covered"', () => {
        expect(bar()).to.equal('covered');
    });
});
