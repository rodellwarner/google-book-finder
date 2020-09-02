import React, { Component } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="h1">Google Book Search</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;
