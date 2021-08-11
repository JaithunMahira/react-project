import React from "react";

class SearchBar extends React.Component {
  state = { term: "Hi there!" };

  onFormSubmit = (event) => {
    event.preventDefault();

    //calling the callback function from props
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        {/*onSubmit={(event) => this.onFormSubmit(event)}*/}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(event) => {
                this.setState({ term: event.target.value });
              }}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
