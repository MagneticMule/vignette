import React, { Component } from "react";
import Vignette from "./Components/Vignette";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Vignette />
      </div>
    );
  }
}

export default App;
