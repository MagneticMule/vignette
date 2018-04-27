import React, { Component } from "react";
import { bool } from "prop-types";
import { AudioRecorder } from "../Libs/AudioRecorder";

let audioRecorder;

class MediaWidget extends Component {
  state = {
    isRecording: false
  };

  static propTypes = {
    isRecording: bool
  };

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
  }

  componentDidMount() {
    // this.setState({ audioRecorder: new AudioRecorder() });
    audioRecorder = new AudioRecorder();
    audioRecorder.initializeRecorder();
  }

  startRecording() {
    this.setState({ isRecording: true });
    audioRecorder.startRecording();
  }

  stopRecording = () => {
    this.setState({ isRecording: false });
    audioRecorder.stopRecording();
  };

  render() {
    return (
      <div className="widget soundrecorder">
        <button
          id="btn btn-record"
          className="red"
          onClick={this.startRecording}
          disabled={this.state.isRecording}
        >
          record
        </button>
        <button id="btn btn-play" className="blue">
          play
        </button>
        <button id="btn btn-stop" className="green">
          stop
        </button>
      </div>
    );
  }
}

export default MediaWidget;
