import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    fontSize: 30,
  },
  message: {
    margin: 10,
  },
});

class MessagesScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Messages</Text>
        {this.props.messages.map(this.renderMessage)}
      </View>
    );
  }

  renderMessage = (message) => {
    return (
      <Text key={message} style={styles.message}>{message}</Text>
    )
  }
}

const select = (state) => ({
  messages: state,
});

export default connect(select)(MessagesScreen);