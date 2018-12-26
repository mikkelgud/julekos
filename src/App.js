import React, { Component } from "react";
import StyledMessage from "./styleguides/StyledMessage";
import MessageBox from "./styleguides/MessageBox";


class App extends Component {
  render() {
    return (
      <div>
        <MessageBox title= "FEILMELDING" description="noe skjedde"  info={true} error={true}/>
      </div>
    );
  }
}

export default App;
