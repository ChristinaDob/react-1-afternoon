import React, { Component } from 'react';

/* The problem summary: Using a pre-determined array of strings, filter out strings that do not contain a given string. Display a new array populated with the strings that do contain the given string */

class FilterString extends Component {
  constructor(props) {
    super(props);
    {
      /* 2 - use state to keep track of what the user input is, our unfiltered array, and our filtered array */
    }
    this.state = {
      names: [
        'Barbra',
        'Michael',
        'Chris',
        'Jennifer',
        'Maria',
        'Matt',
        'Allison',
        'Lisa',
        'June',
        'Albert'
      ],
      userInput: '',
      filteredNames: []
    };
  }

  /* 4 - use state to keep track of what the user input is, our unfiltered array, and our filtered array */
  handelChange(val) {
    this.setState({ userInput: val });
  }

  /* 7 - solve the toy problem */
  filteredNames(userInput) {
    let names = this.state.names;
    let filteredNames = [];

    for (let i = 0; i < names.length; i++) {
      if (names[i].includes(userInput)) {
        filteredNames.push(names[i]);
      }
    }

    /* 8 - setState filteredNames */
    this.setState({ filteredNames: filteredNames });
  }

  /* 1 - begin by rendering our component's outline */
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>

        {/* 3 - update our span elements to display our unfiltered and filtered array of names */}
        <span className="puzzleText">
          Names: {JSON.stringify(this.state.names, null, 10)}
        </span>

        {/* 5 - update our input element to handle user input */}
        <input
          className="inputLine"
          onChange={e => this.handelChange(e.target.value)}
        />

        {/* 6 - update our button element to handle filtering our names array */}
        <button
          className="confirmationButton"
          onClick={() => this.filteredNames(this.state.userInput)}
        >
          Filter
        </button>

        {/* 3 - update our span elements to display our unfiltered and filtered array of names */}
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterString;
