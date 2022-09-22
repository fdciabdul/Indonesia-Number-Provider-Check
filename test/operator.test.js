// test 

const { expect } = require('chai');
const { describe, it } = require('mocha');
const operator = require('../index.js').operator;
// test the function operator
describe('operator', () => {
    it('should return Telkomsel', () => {
        expect(operator('081111111111')).to.equal('Telkomsel');
    });
    it('should return XL', () => {
        expect(operator('081711111111')).to.equal('XL');
    });
    it('should return Axis', () => {
        expect(operator('083111111111')).to.equal('Axis');
    });
    it('should return Indosat', () => {
        expect(operator('081411111111')).to.equal('Indosat');
    });
    it('should return Three', () => {
        expect(operator('089613222222')).to.equal('Three');
    });
    it('should return Smartfren', () => {
        expect(operator('088111111111')).to.equal('Smartfren');
    });
    it('should return By.u', () => {
        expect(operator('0851111111111')).to.equal('By.u');
    });
    it('should return Unknown', () => {
        expect(operator('081011111111')).to.equal('Unknown');
    });
});