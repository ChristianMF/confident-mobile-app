import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from './env.js';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import QuickReplies from 'react-native-gifted-chat/lib/QuickReplies';

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
   
    Dialogflow_V2.requestEvent(
      "Welcome",
      {param1: "Welcome"},
      result=>this.handleGoogleResponse(result),
      error=>{console.log(error);}
  );
  }

  async loadAssetsAsync() {
    await Font.loadAsync({
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
    let action = result.queryResult.action;
    this.sendBotResponse(text, action);
  }

  sendBotResponse(text, action) {
    if (action === 'input.welcome') {
      let msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        quickReplies: {
          type: 'radio',
          keepIt: true,
          values: [
            {
              title: '😋 Yes',
              value: 'yes',
            },
            {
              title: '📷 Yes, let me show you with a picture!',
              value: 'yes_picture',
            },
            {
              title: '😞 Nope. What?',
              value: 'no',
            },
          ],
        },
        user: BOT_USER
      };

      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, [msg])
      }));
    
    } else {
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

}

onTriggerEvent(quickReplies) { 
  if (quickReplies[0].value === 'yes') {
    Dialogflow_V2.requestEvent(
    "Welcome",
    {param1: "Welcome"},
    result=>this.handleGoogleResponse(result),
    error=>{console.log(error);}
    )
  }
}

render() {

  if (!this.state.fontLoaded) {
    return null; // render some progress indicator
  }

    return (
      <KeyboardAvoidingView style={styles.myGeneralView}>
        <ImageBackground source={require('./assets/images/4.gif')} style={styles.image}>
        <View style={styles.myMenu}>

          <View style={styles.myTitle}>
            <Text style={styles.myText}>
                Confident ✌️
            </Text>
          </View>

          <View style={styles.myButton}>
            <TouchableOpacity style={styles.actionButtonIcon1} onPress={()=> {console.log('1')}}>
              <Icon name="ios-home" style={styles.actionButtonIcon1}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButtonIcon2} onPress={()=> {console.log('2')}}>
              <Icon name="ios-call" style={styles.actionButtonIcon2}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButtonIcon3} onPress={()=> {console.log('3')}}>
              <Icon name="ios-megaphone" style={styles.actionButtonIcon3}/>
            </TouchableOpacity>
          </View>

        </View>

        
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
          renderQuickReplies={(props) => <QuickReplies color='white' {...props} />}
          onQuickReply={(quickReplies) => <QuickReplies onPress={this.onTriggerEvent(quickReplies)} />}
        />
        </ImageBackground>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  myGeneralView: {
    flex: 1, 
    backgroundColor: 'transparent' 
  },
  myMenu:{
    marginTop: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  myTitle: {
    width:'100%',
    backgroundColor: 'transparent'
  },
  myText: {
    width:'100%',
    fontFamily:'Chewy',
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
    fontSize: 45,
    color: 'white',
    textAlign: 'center' 
  },
  myButton:{
    padding: 15,
    borderRadius:20,
    backgroundColor:'orange',
    width: 150,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center' 
  },
  actionButtonIcon1: {
    fontSize: 25,
    height: 22,
    color: 'white',
    marginRight: 'auto'
  },
  actionButtonIcon2: {
    fontSize: 25,
    height: 22,
    color: 'white',
  },
  actionButtonIcon3: {
    fontSize: 25,
    height: 22,
    color: 'white',
    marginLeft: 'auto'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default App;