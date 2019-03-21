import React, { Component } from 'react';

/* The problem summary: Using a pre-determined array of objects, filter out objects that do not have a given property. Display a new array populated with the objects that do have the given property */

class FilterObject extends Component {
  constructor(props) {
    super(props);

    {
      /* 2 - use state to keep track of what the user input is, our unfiltered array, and our filtered array */
    }
    this.state = {
      employees: [
        {
          name: 'Bob Brown',
          title: 'Director',
          age: 42
        },
        {
          name: 'Dan Smith',
          age: 24
        },
        {
          name: 'Sue Rogers',
          title: 'Admin',
          haircolor: 'blond'
        },
        {
          name: 'Jim Jones',
          haircolor: 'black'
        }
      ],
      userInput: '',
      filteredEmployees: []
    };
  }

  /* 4 - update our input element to handle user input and setState */
  handleChange(val) {
    this.setState({ userInput: val });
  }

  /* 7 - solve the toy problem */
  filteredEmployees(prop) {
    let employees = this.state.employees;
    let filteredEmployees = [];

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(prop)) {
        filteredEmployees.push(employees[i]);
      }
    }

    /* 8 - setState filteredEmployees */
    this.setState({ filteredEmployees: filteredEmployees });
  }

  /* 1 - begin by rendering our component's outline */
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>FilterObject</h4>

        {/* 3 - update our span elements to display our unfiltered array of employees */}
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.employees, null, 10)}
        </span>

        {/* 5 - update our input element to handle user input */}
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />

        {/* 6 - update our button element to handle filtering our employees array */}
        <button
          className="confirmationButton"
          onClick={() => this.filteredEmployees(this.state.userInput)}
        >
          Filter
        </button>

        {/* 3 - update our span elements to display our filtered array of employees */}
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
