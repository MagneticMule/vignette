import React, { Component } from "react";

class SoundRecorder extends Component {
  render() {
    return (
      <div className="vignette-soundrecorder">
        <button id="btn btn-record" class="red">
          record
        </button>
        <button id="btn btn-play" class="blue">
          play
        </button>
        <button id="btn btn-stop" class="green">
          stop
        </button>
      </div>
    );
  }
}

export default SoundRecorder;
