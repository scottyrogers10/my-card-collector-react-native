import React, { Component } from "react";
import { AppRegistry } from "react-native";
import Main from "./js/Main";

export default class MyCardCollector extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent("MyCardCollector", () => MyCardCollector);
