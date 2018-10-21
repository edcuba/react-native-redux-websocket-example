import { Component } from "react";
import { connect } from "react-redux";
import { NEW_MESSAGE } from "./reducers";

class WebSocketManager extends Component {

  socket = undefined;

  componentDidMount() {
    this.connect();
  }

  componentWillUnmount() {
    if (this.socket) { this.socket.close(); }
  }

  render = () => null;

  subscribeToUpdates = () => {
    const request = {
      type: "subscribe",
      payload: null,
    };
    this.socket.send(JSON.stringify(request));
  }

  connect() {
    this.socket = new WebSocket("ws://localhost:8000");
    this.socket.onopen = this.subscribeToUpdates;
    this.socket.onmessage = this.handleMessage;
    this.socket.onclose = this.handleClose;
    this.socket.onerror = this.handleError;
  }

  handleMessage = (message) => {
    const response = JSON.parse(message.data);
    if (response.type === "message") {
      this.props.newMessage(response.payload);
    } else {
      // other responses
    }
  }

  handleClose = () => alert("Connection closed");
  handleError = (ev) => alert(JSON.stringify(ev));
}

const actions = (dispatch) => ({
  newMessage: (message) => dispatch({type: NEW_MESSAGE, payload: message}),
});

export default connect(null, actions)(WebSocketManager);