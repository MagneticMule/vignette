import React, { Component } from "react";
import Title from "./Title";
import Picture from "./Picture";
import SoundRecorder from "./SoundRecorder";
class Vignette extends Component {
  render() {
    return (
      <div className="vignette">
        <Title />
        <Picture />
        <SoundRecorder />
      </div>
    );
  }
}

export default Vignette;
