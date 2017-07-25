import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { terms: "" };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.terms}
          onChange={event => this.setState({ terms: event.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
