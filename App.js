import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from './env.js';
import * as Font from 'expo-font';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ marginTop: 30, fontFamily:'Chewy', textShadowColor: 'black', textShadowOffset: {width: 0, height: 0}, textShadowRadius: 10, fontSize: 45, color: 'white', textAlign: 'center' }}>
            Confident ✌️
        </Text>
        <View style={{ flex: .40, backgroundColor: '#fff'}}>
          {/*Rest of App come ABOVE the action button component!*/}
          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
              <Icon name="ios-home" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
              <Icon name="ios-call" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
              <Icon name="ios-megaphone" style={styles.actionButtonIcon} />
            </ActionButton.Item>
        </ActionButton>
        </View>
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

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});

export default App;