import React, { Component } from "react";

class SoundRecorder extends Component {
  constructor(props) {
    super(props);

    // @ https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
    const audioCtx = new (window.AudioContext || window.webKitAudioContext)();

    let chunks = [];
    this.state = {
      audioConstraints: { audio: true, video: false },
      isRecording: false
    };
    // This binding is necessary to make `this` work in the callback
    this.startRecording = this.startRecording.bind(this);
  }

  componentDidMount = () => {
    /**
     * will prompt the user for access to their media input device. In this case a mic.
     * if the user gives permission then the 'successCallBack' will be fired. If the user
     * doesnt give permission then the errorCallBack will be fired with a PermissionDeniedError.
     * if the media is not available then the errorCallBack will be fires with a NotFoundError.
     * note: The user is not obliged to make a choice here in which case neither error will be returned.
     */
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia(this.state.audioConstraints)
        .then(successCallBack, errorCallBack);
      console.log("getUserMedia API supported");
    } else {
      console.log("Getusermedia API is not supported on this browser");
    }
  };

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
