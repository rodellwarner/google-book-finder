import React, { Component } from "react";
import "./Results.css";
import ListOfVolumes from "../ListOfVolumes/ListOfVolumes";

class Results extends Component {
  render() {
    const restultsToDisplay = <ListOfVolumes results={this.props.results} />;

    console.log(restultsToDisplay);

    return <div className="results">{restultsToDisplay}</div>;
  }
}

export default Results;
