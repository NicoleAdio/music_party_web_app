import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import JoinRoomPage from "./JoinRoomPage";
import CreateRoomPage from "./CreateRoomPage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomePage />
        <JoinRoomPage />
        <CreateRoomPage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);

/* <h1>Music Party App ʕ•́ᴥ•̀ʔっ♡</h1> */
