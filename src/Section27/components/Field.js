import React from "react";
import LanguageContext from "../contexts/LanguageContext";
class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const labelText = this.context === "english" ? "Name" : "Naam";
    return (
      <div className="ui field">
        <label>{labelText}</label>
        <input />
      </div>
    );
  }
}

export default Field;
