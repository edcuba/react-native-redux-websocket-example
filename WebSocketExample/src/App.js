import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { store } from "./reducers";
import MessagesScreen from "./MessagesScreen";
import WebSocketManager from "./WebSocketManager";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <MessagesScreen />
          <WebSocketManager />
        </Fragment>
      </Provider>
    );
  }
}