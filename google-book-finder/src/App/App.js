import React, { Component } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Results from "../Results/Results";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsArray: [],
    };
  }

  updateSearchResults(newResults) {
    this.setState({
      itemsArray: newResults,
    });
  }

  render() {
    return (
      <div className="app">
        <h1 className="h1">Search Google Books</h1>
        <SearchBar
          handleSearchResults={(resultsFromSearchBar) =>
            this.updateSearchResults(resultsFromSearchBar)
          }
        />
        <Results results={this.state.itemsArray} />
      </div>
    );
  }
}

export default App;
