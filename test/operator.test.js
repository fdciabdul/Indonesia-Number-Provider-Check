// test 

const { expect } = require('chai');
const { describe, it } = require('mocha');
const operator = require('../index.js').operator;
// test the function operator
describe('operator', () => {
    it('should return Telkomsel', () => {
        expect(operator('0811')).to.equal('Telkomsel');
    });
    it('should return XL', () => {
        expect(operator('0817')).to.equal('XL');
    });
    it('should return Axis', () => {
        expect(operator('0831')).to.equal('Axis');
    });
    it('should return Indosat', () => {
        expect(operator('0814')).to.equal('Indosat');
    });
    it('should return Three', () => {
        expect(operator('0894')).to.equal('Three');
    });
    it('should return Smartfren', () => {
        expect(operator('0881')).to.equal('Smartfren');
    });
    it('should return Unknown', () => {
        expect(operator('0810')).to.equal('Unknown');
    });
});