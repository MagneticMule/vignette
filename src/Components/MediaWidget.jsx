import React, { Component } from "react";
import { bool } from "prop-types";
import { AudioRecorder } from "../Libs/AudioRecorder";

// vars
let audioRecorder;
let audioContext;
let audioConstraints; // we only need audio here
let mediaRecorder;

let chunks = [];

class MediaWidget extends Component {
  state = {
    isRecording: false,
    hasRecording: false,
    isReady: false
  };

  static propTypes = {
    isRecording: bool,
    hasRecording: bool,
    isReady: bool
  };

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    // this.startRecording = this.startRecording.bind(this);
    // this.stopRecording = this.stopRecording.bind(this);
  }

  componentDidMount() {
    // @ https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
    audioContext = window.AudioContext;
    audioRecorder = new AudioRecorder();
    audioRecorder.initializeRecorder();
    const audioConstraints = { audio: true, video: false };
  }

  startRecording = () => {
    this.setState({ isRecording: true });
    audioRecorder.startRecording();
  };

  stopRecording = () => {
    this.setState({ isRecording: false });
    audioRecorder.stopRecording();
  };

  successCallBack = audioStream => {
    mediaRecorder = new mediaRecorder(audioStream);
  };

  render() {
    return (
      <div className="widget soundrecorder">
        <button
          id="btn btn-record"
          className="red"
          onClick={e => this.startRecording}
          disabled={this.state.isRecording}
        >
          record
        </button>
        <button id="btn btn-play" className="blue">
          play
        </button>
        <button
          id="btn btn-stop"
          className="green"
          onClick={this.stopRecording}
        >
          stop
        </button>
      </div>
    );
  }
}

export default MediaWidget;
