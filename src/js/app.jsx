import React, { Component } from 'react';
import Mortgage from './lib/Mortgage';
import calculator from './lib/calculator';

export default class App extends React.Component {
   constructor(props) {
     super(props);
    this.state = { 
        this.principal : 0,
        this.interestRate : 0,
        this.loanTerm : 0,
        this.term: '',
        this.period : 0

      };
      
    }
    hadleOnChange(event) {
      let value = event.target.value;
      let name = event.target.name;

      this.setState({
        [name]: value
      })
    }
  render() {
    return (
      <div>
      <div>
      <h1>Mortgage Calculator</h1>
      
      </div>

<form>
<input name='principal' type='number' defaultValue={this.state.principal} onChange={this.handleOnChange} />
<input name='interest' type='number' defaultValue={this.state.interest} onChange={this.handleOnChange} />
<input name='loanTerm' defaultValue={this.state.term} onChange={this.handleOnChange} />

<select name='period' value='12'>
  <option value='12'>Monthly</option>
  <option value='4'>Quarterly</option>
</select>
<button name='submit' onClick={this.monthlyPayment}>Calculate</button>

 </form>
</div>
    );
  }
}