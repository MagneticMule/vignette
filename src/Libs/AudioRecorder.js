// @ https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
const audioCtx = new (window.AudioContext || window.webKitAudioContext)();
let mediaRecorder;
let blob;
let chunks = [];

const audioConstraints = {
  audio: true,
  video: false
};

export class AudioRecorder {
  constructor() {
    mediaRecorder.onstop = this.onStop();
  }

  successCallBack = audioStream => {
    mediaRecorder = new MediaRecorder(audioStream);
  };

  errorCallBack = streamError => {
    console.log("WebRTC API not supported on this browser. " + streamError);
  };

  startRecording = () => {
    mediaRecorder.start();
    console.log(mediaRecorder.state);
  };

  stopRecording = () => {
    mediaRecorder.stop();
    console.log(mediaRecorder.state);
  };

  initializeRecorder = () => {
    /**
     * will prompt the user for access to their media input device. In this case a mic.
     * if the user gives permission then the 'successCallBack' will be fired. If the user
     * doesnt give permission then the errorCallBack will be fired with a PermissionDeniedError.
     * if the media is not available then the errorCallBack will be fires with a NotFoundError.
     * note: The user is not obliged to make a choice here in which case neither error will be returned.
     */
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia(audioConstraints)
        .then(this.successCallBack, this.errorCallBack);
      console.log("getUserMedia API supported");
    } else {
      console.log("Getusermedia API is not supported on this browser");
    }
  };

  /**
   * The MediaRecorder.onstop event handler(part of the MediaRecorder API) handles the stop event, allowing you to * * run code in response to media recording via a MediaRecorder being stopped.
   * The stop event is thrown either as a result of the MediaRecorder.stop() method being invoked, or when the media * stream being captured ends.In each case, the stop event is preceded by a dataavailable event, making the Blob * * captured up to that point available for you to use in your application.
   */
  onStop = e => {
    console.log("onstop");
    let audio = document.createElement("audio");
    audio.setAttribute("controls", "");

    audio.controls = true;

    blob = new Blob(chunks, {
      type: "audio/ogg; codecs=opus"
    });
    chunks = [];
    const audioURL = window.URL.createObjectURL(blob);
    audio.src = audioURL;
    // audio.src = audioURL;
    console.log("recorder stopped");
  };
}
