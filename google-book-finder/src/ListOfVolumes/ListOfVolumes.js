import React, { Component } from "react";
import "./ListOfVolumes.css";
import Volume from "../Volume/Volume";

class ListOfVolumes extends Component {
  render() {
    return this.props.results.map((item, index) => (
      <Volume key={index} item={item} itemNumber={index} />
    ));
  }
}

export default ListOfVolumes;
