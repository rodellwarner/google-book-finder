import React, { Component } from "react";
import "./Results.css";
import Volume from "../Volume/Volume";

class Results extends Component {
  render() {
    this.props.results.map((item, index) =>
      console.log("Item: ", item, "Index :", index)
    );

    const restultsToDisplay = this.props.results.map((item, index) => (
      <Volume key={index} item={item} />
    ));

    return <div className="results">{restultsToDisplay}</div>;
  }
}

export default Results;
