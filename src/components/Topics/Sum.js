import React, { Component } from 'react';

/* The problem summary: Given two numbers, calculate the sum and display it. */

class Sum extends Component {
  constructor(props) {
    super(props);

    {
      /*  2 - use state to keep track of two numbers the user gives us and the sum of those two numbers */
    }
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }

  /* 6 - solve the toy problem  & update our input element to handle user input and setState */
  updateNumber1(val) {
    this.setState({ number1: parseInt(val, 10) });
  }

  updateNumber2(val) {
    this.setState({ number2: parseInt(val, 10) });
  }

  add(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }

  /* 1 - begin by rendering our component's outline */
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>

        {/* 4 - update our input element to handle user input */}
        <input
          className="inputLine"
          type="number"
          onChange={e => this.updateNumber1(e.target.value)}
        />
        <input
          className="inputLine"
          type="number"
          onChange={e => this.updateNumber2(e.target.value)}
        />

        {/* 5 - update our button element to update the value of sum */}
        <button
          className="confirmationButton"
          onClick={() => this.add(this.state.number1, this.state.number2)}
        >
          Add
        </button>

        {/* 3 - update our span element to display sum */}
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    );
  }
}

export default Sum;
