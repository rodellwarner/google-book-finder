import React, { Component } from "react";
import "./Volume.css";

class Volume extends Component {
  constructor(props) {
    super(props);
    this.state = { objectContainingThumbnail: [] };
  }

  render() {
    console.log("Image Links: ", this.props.item.volumeInfo.imageLinks);

    // const imageLinks = this.props.item.volumeInfo.imageLinks;

    // if ("thumbnail" in imageLinks) {
    //   const thumbnailImage = imageLinks.thumbnail;
    //   const url = <img alt="book cover">{thumbnailImage}</img>;
    //   return url;
    // }

    return (
      <div className="volume">
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
