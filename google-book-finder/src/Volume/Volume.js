import React, { Component } from "react";
import "./Volume.css";

class Volume extends Component {
  render() {
    return <p key={this.props.index}>{this.props.item.volumeInfo.title}</p>;
  }
}

export default Volume;
