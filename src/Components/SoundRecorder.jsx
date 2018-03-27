import React, { Component } from "react";

class SoundRecorder extends Component {
  constructor(props) {
    super(props);

    // @ https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
    const audioCtx = new (window.AudioContext || window.webKitAudioContext)();

    // we only need audio here
    const audioConstraints = { audio: true, video: false };
    let chunks = [];
    this.state = { isRecording: true };
    // This binding is necessary to make `this` work in the callback
    this.startRecording = this.startRecording.bind(this);
  }

  startRecording() {}

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
