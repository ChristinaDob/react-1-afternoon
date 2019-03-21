import React, { Component } from 'react';

/* The problem summary: Given a string of numbers separated by commas, split the numbers into two different arrays. The first being an array of all the even numbers and the second being an array of all the odd numbers.*/

class EvenAndOdd extends Component {
  constructor(props) {
    super(props);

    {
      /* 2 - use state to keep track of what the user input is, our even's array, and our odd's array */
    }
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    };
  }

  /* 4 - update our input element to handle user input and setState */
  handleChange(val) {
    this.setState({ userInput: val });
  }

  /* 7 - solve the toy problem */
  assignEvenAndOdds(userInput) {
    let arr = userInput.split(',');
    let evens = [];
    let odds = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evens.push(parseInt(arr[i], 10) + ', ');
      } else {
        odds.push(parseInt(arr[i], 10) + ', ');
      }
    }
    /* 8 - setState on evenArray and oddArray */
    this.setState({ evenArray: evens, oddArray: odds });
  }

  /* 1 - begin by rendering our component's outline */
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>

        {/* 5 - update our input element to handle user input */}
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />

        {/* 6 - whenever a user clicks our button element our arrow function is called which calls a method on our class called assignEvenAndOdds and passes in the current userInput on state */}
        <button
          className="confirmationButton"
          onClick={() => {
            this.assignEvenAndOdds(this.state.userInput);
          }}
        >
          Split
        </button>

        {/* 3 - update our span elements to display our evenArray and oddArray */}
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
