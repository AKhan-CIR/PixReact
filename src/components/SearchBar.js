import React from "react";

export class SearchBar extends React.Component {
  state = { term: "" };

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // onInputClick() {
  //   console.log("Input was clicked");
  // }

  // EVENT LISTENERS
  // onClick
  // onChange
  // onSubmit

  // THIS WILL ALWAYS ERROR OUT.  THIS IS UNDEFINED!!!!
  // onFormSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state.term);
  // }

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        {/* <form onSubmit={(event) => this.onFormSubmit() MAKE SURE TO CALL FUNCTION FOR THIS FIX} className="ui form"></form> ALSO A FIX FOR THIS IS UNDEFINED*/}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term} //Controlled Element
              onChange={event => this.setState({ term: event.target.value })} //Controlled Element
              // onChange={this.onInputChange}//Uncontrolled Element
              // onChange={event => console.log(event.target.value)}
              // onClick={this.onInputClick}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
