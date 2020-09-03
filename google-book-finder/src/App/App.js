import React, { Component } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Results from "../Results/Results";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: {},
    };
  }

  updateSearchResults(newResults) {
    this.setState({
      searchResults: newResults,
    });
  }

  render() {
    return (
      <div className="app">
        <h1 className="h1">Google Book Search</h1>
        <SearchBar
          handleSearchResults={(resultsFromSearchBar) =>
            this.updateSearchResults(resultsFromSearchBar)
          }
        />
        <Results results={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
