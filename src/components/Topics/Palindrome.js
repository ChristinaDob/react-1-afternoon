import React, { Component } from 'react';

/* The problem summary: Using a given string, determine if it is spelt the same backwards as it is forwards. */

class Palindrome extends Component {
  constructor(props) {
    super(props);

    {
      /* 2 - use state to keep track of what the user input is and if the user input is a palindrome or not */
    }
    this.state = {
      userInput: '',
      palindrome: ''
    };
  }

  /* 4 - update our input element to handle user input and setState */
  handleChange(val) {
    this.setState({ userInput: val });
  }

  /* 7 - solve the toy problem */
  isPalindrome(userInput) {
    let forwards = userInput;
    let backwards = userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    if (forwards === backwards) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
  }

  /* 1 - begin by rendering our component's outline */
  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>

        {/* 5 - update our input element to handle user input */}
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />

        {/* 6 - update our button element to handle setting palindrome to "true" or "false" */}
        <button
          className="confirmationButton"
          onClick={() => this.isPalindrome(this.state.userInput)}
        >
          Check
        </button>

        {/* 3 - update our span element to display palindrome */}
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
