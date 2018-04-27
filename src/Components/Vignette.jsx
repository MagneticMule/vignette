import React, { Component } from "react";
import Title from "./Title";
import Picture from "./Picture";
import MediaWidget from "./MediaWidget";
class Vignette extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: true };
  }
  render() {
    return (
      <div className="vignette">
        <Title />
        <Picture />
        <MediaWidget />
      </div>
    );
  }
}

export default Vignette;
