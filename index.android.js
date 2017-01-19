import React, { Component } from "react";
import { AppRegistry } from "react-native";
import Main from "./app/Main";

export default class MyCardCollector extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent("MyCardCollector", () => MyCardCollector);