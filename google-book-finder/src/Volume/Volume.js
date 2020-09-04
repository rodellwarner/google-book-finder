import React, { Component } from "react";
import "./Volume.css";

class Volume extends Component {
  render() {
    const url = this.props.item.volumeInfo?.imageLinks?.thumbnail;
    const description = this.props.item.volumeInfo?.description;
    const author = this.props.item.volumeInfo?.authors;
    const preview = this.props.item.volumeInfo?.previewLink;

    const itemNumber = this.props.itemNumber + 1;

    console.log(preview);

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
          {!!author && <b>Author:</b>} {author}
        </p>
        <p>
          {!!description && <b>Description:</b>} {description}
        </p>
        {!!preview && (
          <a href={preview} target="_blank" rel="noopener noreferrer">
            <button className="previewButton">Preview</button>
          </a>
        )}
      </div>
    );
  }
}

export default Volume;
