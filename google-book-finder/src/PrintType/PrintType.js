import React, { Component } from "react";
import "./PrintType.css";

const STORE = ["All", "Books", "Magazines"];

function addOptions(arrayOfOptions) {
  let listOfSelectOptions = arrayOfOptions.map((selectionOption, index) => {
    return (
      <option value={selectionOption} key={index}>
        {selectionOption}
      </option>
    );
  });
  return listOfSelectOptions;
}

class PrintType extends Component {
  render() {
    return (
      <div className="printType">
        <label htmlFor="selectPrintType" id="selectPrintTypeLabel">
          Select Print Type
        </label>
        <select
          name="selectPrintType"
          id="selectPrintType"
          defaultValue="ALL"
          onChange={(e) => this.props.handleChangePrintType(e.target.value)}
        >
          {addOptions(STORE)}
        </select>
      </div>
    );
  }
}

export default PrintType;
