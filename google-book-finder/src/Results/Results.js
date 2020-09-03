import React, { Component } from "react";
import "./Results.css";

class Results extends Component {
  render() {
    //Why can't I access the array in this.props.results.items
    //to get, for example:
    // console.log(this.props.results.items[8].volumeInfo.title);

    console.log("Items Array: ", this.props.results.items);

    return <div className="results"></div>;
  }
}

export default Results;
