const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {

    it('should have principal', () => {
        expect(this.principal).to.exist;
      });
    it('should get correct monthly payment', () => {
       expect(new Mortgage(null, 3.75, 30, 300000).monthlyPayment).to.equal('1971.31')
    });
    it('should have terms', () => {
        expect(parseInt(this.n * 12)).to.exist;
    });
    it('should have period', () => {
        expect(parseFloat(this.i / 100 / 12)).to.exist;
      });
});