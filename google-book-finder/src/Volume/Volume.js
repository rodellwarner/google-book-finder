import React, { Component } from "react";
import "./Volume.css";

class Volume extends Component {
  constructor(props) {
    super(props);
    this.state = { objectContainingThumbnail: [] };
  }

  render() {
    console.log(
      "Image Links: ",
      this.props.item.volumeInfo?.imageLinks?.thumbnail
    );

    const url = this.props.item.volumeInfo?.imageLinks?.thumbnail;

    const itemNumber = this.props.itemNumber + 1;

    return (
      <div className="volume">
        {!!url && <img alt="cover" src={url} />}
        <p>
          <b>{itemNumber}.</b>
        </p>
        <p key={this.props.index}>
          <b>Title:</b> {this.props.item.volumeInfo.title}
        </p>
        <p>
          <b>Author:</b> {this.props.item.volumeInfo.authors}
        </p>
        <p>
          <b>Description:</b> {this.props.item.volumeInfo.description}
        </p>
      </div>
    );
  }
}

export default Volume;
