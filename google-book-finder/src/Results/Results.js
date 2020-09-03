import React, { Component } from "react";
import "./Results.css";
import ListOfVolumes from "../ListOfVolumes/ListOfVolumes";

class Results extends Component {
  render() {
    this.props.results.map((item, index) =>
      console.log("Item: ", item, "Index :", index)
    );

    const restultsToDisplay = <ListOfVolumes results={this.props.results} />;

    return <div className="results">{restultsToDisplay}</div>;
  }
}

export default Results;
