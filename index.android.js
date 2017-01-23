import "rxjs";
import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import Main from "./js/Main";

export default class MyCardCollector extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Main />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("MyCardCollector", () => MyCardCollector);