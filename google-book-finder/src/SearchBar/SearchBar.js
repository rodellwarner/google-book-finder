import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="searchBar">
        <form className="searchForm">
          <label id="searchInputLabel" htmlFor="Search">
            Search
          </label>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            placeholder="e.g. One Hundred Years Of Solitude"
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
