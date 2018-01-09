const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

const nightmare = new Nightmare();
let pageObject = null;

describe('End to End Tests', () => {

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });   
  
  // This is where your code is going to go
  it('should contain a <h1> element for the page title', () => {
    pageObject
      .evaluate(() => document.querySelector('h1').innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Mortgage Calculator');
    })
  });

  it('should correctly calculate mortgage', () => {
    pageObject
      .wait()
      .type('input[name=principal]', 300000)
      .type('input[name=interestRate]', 3.75)
      .type('input[name=loanTerm]', 30)
      .select('select[name=period]', 12)
      .click('button#calculate')
      .wait('#output')
      .evaluate(() => document.querySelector('#output').innerText)
      .then((outputText) => {
        expect(outputText).to.equal('$1389.35');
      })
      // .timeout(6500);
  })
})