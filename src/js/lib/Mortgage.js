
module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
      this.principal = principal;
      this.interest = interest;
      this.term = term;
      this.M = period;
  
this.monthlyPayment = this.monthlyPayment.bind(this);
this.handleOnChange = this.handleOnChange.bind(this);
}
  get monthlyPayment() {
      e.preventDefault();
        var p = parseFloat(this.state.principal);
        var i = parseFloat(this.state.interest / 100 / 12);
        var t = parseFloat(this.state.term * 12);
        var M = p * ((i * Math.pow((1 + i), t)) / (Math.pow((1 + i), t) - 1));
  
   
 }
}

