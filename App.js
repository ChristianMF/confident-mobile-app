import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from './env.js';
import * as Font from 'expo-font';

const BOT_USER = {
  _id: 2,
  name: 'Confident Bot',
  avatar: 'https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/14445772001547544865-512.png'
};

class App extends Component {

  state = {
    fontLoaded: false,
    messages: [
      {
        _id: 1,
        text: 'Hola, ¿Cómo estás?',
        createdAt: new Date(),
        user: BOT_USER
      }
    ]
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_SPANISH,
      dialogflowConfig.project_id
    );
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Chewy: require('./assets/fonts/Chewy-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      result => this.handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  handleGoogleResponse(result) {
    console.log(result);
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER,
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
}

render() {

  if (!this.state.fontLoaded) {
    return null; // render some progress indicator
  }

    return (
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#fff' }} behavior="padding">
        <Text style={{ marginTop: 30, fontFamily:'Chewy', textShadowColor: 'black', textShadowOffset: {width: 0, height: 0}, textShadowRadius: 10, fontSize: 45, color: 'white', textAlign: 'center' }}>
            Confident ✌️
        </Text>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </KeyboardAvoidingView>
    );
  }
}
export default App;