import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  searchTermChanged(newSearchTerm) {
    this.setState({
      searchTerm: newSearchTerm,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      `${this.state.searchTerm}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: "AIzaSyAMuao1Ge-4E2QutggkznS4qB14zjq2Zf0",
        "Content-type": "application/json",
      },
    };

    console.log("URL: ", url);

    fetch(url, options)
      .then((results) => results.json())
      .then((resultsJSON) => console.log(resultsJSON));
  }

  render() {
    console.log("SearchTerm: ", this.state.searchTerm);
    return (
      <div className="searchBar">
        <form className="searchForm" onSubmit={(e) => this.handleSubmit(e)}>
          <label id="searchInputLabel" htmlFor="Search">
            Search
          </label>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            placeholder="e.g. One Hundred Years Of Solitude"
            onChange={(e) => this.searchTermChanged(e.target.value)}
          ></input>
          <button type="Submit" id="submitButton">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
