import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from './env.js';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import QuickReplies from 'react-native-gifted-chat/lib/QuickReplies';

import firebaseSvc from './FirebaseSvc';

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
      dialogflowConfig.project_id,
      dialogflowConfig.session_id = dialogflowConfig.session_id + new Date()
    );
    this.loadAssetsAsync();
  }

  componentWillUnmount() {
    firebaseSvc.refOff();
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

  onSendQuickReplies(quickReplies = [], dialogflowConfig = []) {

    let user = {
      _id: dialogflowConfig.session_id
    };

    let messages = [
      {
        _id: dialogflowConfig.session_id,
        text: quickReplies[0].value,
        createdAt: new Date(),
        user: user
      }
    ];

    firebaseSvc.send(messages);
  }

  handleGoogleResponse(result) {
    console.log(result);
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    let action = result.queryResult.action;
    this.sendBotResponse(text, action);
  }

  sendBotResponse(text, action) {

    if (action === '1.1.2') {
      let msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        quickReplies: {
          type: 'radio',
          keepIt: true,
          values: [
            {
              title: 'Futuro',
              value: '¿Qué tema quieres hablar? Futuro',
            },
            {
              title: 'Sexualidad',
              value: '¿Qué tema quieres hablar? Sexualidad',
            },
            {
              title: 'Conflictos con la ley',
              value: '¿Qué tema quieres hablar? Conflictos_ley',
            },
          ],
        },
        user: BOT_USER
      };

      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, [msg])
      }));
    
    } else if (action === '1.2.2') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '¿Hablar de otro tema? Sí',
              },
              {
                title: 'No',
                value: '¿Hablar de otro tema? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.1.1') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Trabajando',
                value: '¿Cómo te ves en 2 años? Trabajando',
              },
              {
                title: 'Estudiando',
                value: '¿Cómo te ves en 2 años? Estudiando',
              },
              {
                title: 'Otro',
                value: '¿Cómo te ves en 2 años? Otro',
              },
              {
                title: 'No sé',
                value: '¿Cómo te ves en 2 años? No sé',
              },
              {
                title: 'Estudiando y Trabajando',
                value: '¿Cómo te ves en 2 años? Estudiando y Trabajando',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.2.1') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Mecánico',
                value: '¿En qué trabajarás? Mecánico',
              },
              {
                title: 'Vendedor ambulante',
                value: '¿En qué trabajarás? Vendedor ambulante',
              },
              {
                title: 'Repartidor',
                value: '¿En qué trabajarás? Repartidor',
              },
              {
                title: 'Chofer',
                value: '¿En qué trabajarás? Chofer',
              },
              {
                title: 'Albañil',
                value: '¿En qué trabajarás? Albañil',
              },
              {
                title: 'Otro',
                value: '¿En qué trabajarás? Otro',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.2.3') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Necesito dinero',
                value: '¿Por qué vas a trabajar? Necesito dinero',
              },
              {
                title: 'No quiero seguir estudiando',
                value: '¿Por qué vas a trabajar? No quiero seguir estudiando',
              },
              {
                title: 'Tradición familiar',
                value: '¿Por qué vas a trabajar? Tradición familiar',
              },
              {
                title: 'Otro',
                value: '¿Por qué vas a trabajar? Otro',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.2.5') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '¿Realmente quieres trabajar ahí? Sí',
              },
              {
                title: 'No',
                value: '¿Realmente quieres trabajar ahí? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.2.6') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '3.2.6 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '3.2.6 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.2.7') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '3.2.7 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '3.2.7 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.3.1') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Secundaría',
                value: '¿Qué estudias actualmente? Secundaría',
              },
              {
                title: 'Preparatoría',
                value: '¿Qué estudias actualmente? Preparatoría',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.3.2') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'UdeG',
                value: '¿En que prepa estudias? UdeG',
              },
              {
                title: 'Conalep',
                value: '¿En que prepa estudias? Conalep',
              },
              {
                title: 'Cecytej',
                value: '¿En que prepa estudias? Cecytej',
              },
              {
                title: 'Cobaej',
                value: '¿En que prepa estudias? Cobaej',
              },
              {
                title: 'Otro',
                value: '¿En que prepa estudias? Otro',
              },
              {
                title: 'No sé',
                value: '¿En que prepa estudias? No sé',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.3.4') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'UdeG',
                value: '¿En que prepa estudiarás? UdeG',
              },
              {
                title: 'Conalep',
                value: '¿En que prepa estudiarás? Conalep',
              },
              {
                title: 'Cecytej',
                value: '¿En que prepa estudiarás? Cecytej',
              },
              {
                title: 'Cobaej',
                value: '¿En que prepa estudiarás? Cobaej',
              },
              {
                title: 'Otro',
                value: '¿En que prepa estudiarás? Otro',
              },
              {
                title: 'No sé',
                value: '¿En que prepa estudiarás? No sé',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.3.6') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '¿Planeas estudiar la universidad? Sí',
              },
              {
                title: 'No',
                value: '¿Planeas estudiar la universidad? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.3.7') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '¿Ya sabes lo que quieres estudiar? Sí',
              },
              {
                title: 'No',
                value: '¿Ya sabes lo que quieres estudiar? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.3.8') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Ciencias sociales o Humanidades/Artes',
                value: '¿Qué estudiarás? Ciencias sociales o Humanidades/Artes',
              },
              {
                title: 'Ciencias exactas o Ingeniería',
                value: '¿Qué estudiarás? Ciencias exactas o Ingeniería',
              },
              {
                title: 'Ciencias Económico Administrativas',
                value: '¿Qué estudiarás? Ciencias Económico Administrativas',
              },
              {
                title: 'Ciencias de la salud',
                value: '¿Qué estudiarás? Ciencias de la salud',
              },

              {
                title: 'No sé',
                value: '¿Qué estudiarás? No sé',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.3.9') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '3.3.9 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '3.3.9 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.4.2') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Familia',
                value: '¿Quién te ha influenciado a planear eso? Familia',
              },
              {
                title: 'Amigos',
                value: '¿Quién te ha influenciado a planear eso? Amigos',
              },
              {
                title: 'Youtubers',
                value: '¿Quién te ha influenciado a planear eso? Youtubers',
              },
              {
                title: 'Internet',
                value: '¿Quién te ha influenciado a planear eso? Internet',
              },
              {
                title: 'Otro',
                value: '¿Quién te ha influenciado a planear eso? Otro',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.4.4') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '¿Crees que vayas a progresar ahí? Sí',
              },
              {
                title: 'No',
                value: '¿Crees que vayas a progresar ahí? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.4.5') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Trabajar',
                value: '¿Qué preferirías? Trabajar',
              },
              {
                title: 'Estudiar',
                value: '¿Qué preferirías? Estudiar',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.5.1') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Deportista',
                value: '¿Tienes algún sueño? Deportista',
              },
              {
                title: 'Músico',
                value: '¿Tienes algún sueño? Músico',
              },
              {
                title: 'Cientifico',
                value: '¿Tienes algún sueño? Cientifico',
              },
              {
                title: 'Youtuber',
                value: '¿Tienes algún sueño? Youtuber',
              },
              {
                title: 'Otro',
                value: '¿Tienes algún sueño? Otro',
              },
              {
                title: 'No',
                value: '¿Tienes algún sueño? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '3.5.3') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '¿Crees poder alcanzar ese sueño? Sí',
              },
              {
                title: 'No',
                value: '¿Crees poder alcanzar ese sueño? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.1.1') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sexo',
                value: '¿Sobre qué tema te gustaría saber? Sexo',
              },
              {
                title: 'Embarazos',
                value: '¿Sobre qué tema te gustaría saber? Embarazos',
              },
              {
                title: 'Orientación sexual',
                value: '¿Sobre qué tema te gustaría saber? Orientación sexual',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.2.1') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Faje',
                value: '¿Qué te gustaría saber sobre sexo? Faje',
              },
              {
                title: 'Sexo',
                value: '¿Qué te gustaría saber sobre sexo? Sexo',
              },
              {
                title: 'Indecision',
                value: '¿Qué te gustaría saber sobre sexo? Indecision',
              },
              {
                title: 'Sexo no consentido',
                value: '¿Qué te gustaría saber sobre sexo? Sexo no consentido',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.2.2') { //Intent de Información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '9.2.2 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '9.2.2 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.2.3') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Métodos anticonceptivos',
                value: '¿De qué te gustaría hablar en temas de sexo? Métodos anticonceptivos',
              },
              {
                title: 'Enfermedades de transmisión sexual',
                value: '¿De qué te gustaría hablar en temas de sexo? Enfermedades de transmisión sexual',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.2.4') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '9.2.4 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '9.2.4 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.2.5') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '9.2.5 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '9.2.5 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.2.6') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '9.2.6 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '9.2.6 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.2.7') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '9.2.7 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '9.2.7 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.3.1') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: '¿Cómo se puede quedar embarazada?',
                value: '¿Cuál es tu duda sobre el embarazo? ¿Cómo se puede quedar embarazada?',
              },
              {
                title: 'Síntomas',
                value: '¿Cuál es tu duda sobre el embarazo? Síntomas',
              },
              {
                title: '¿Qué hacer si sospecho que lo estoy?',
                value: '¿Cuál es tu duda sobre el embarazo? ¿Qué hacer si sospecho que lo estoy?',
              },
              {
                title: '¿A quién puedo acudir?',
                value: '¿Cuál es tu duda sobre el embarazo? ¿A quién puedo acudir?',
              },
              {
                title: 'Opciones si estoy embarazada',
                value: '¿Cuál es tu duda sobre el embarazo? Opciones si estoy embarazada',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.3.2') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '9.3.2 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '9.3.2 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.3.3') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '9.3.3 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '9.3.3 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.3.4') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '9.3.4 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '9.3.4 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.3.5') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '9.3.5 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '9.3.5 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.3.6') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '9.3.6 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '9.3.6 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.4.1') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: '¿Qué es?',
                value: '¿Qué te gustaría conocer sobre este tema de orientación? ¿Qué es?',
              },
              {
                title: '¿Cuantos y cuáles tipos hay?',
                value: '¿Qué te gustaría conocer sobre este tema de orientación? ¿Cuantos y cuáles tipos hay?',
              },
              {
                title: 'He sufrido discriminación',
                value: '¿Qué te gustaría conocer sobre este tema de orientación? He sufrido discriminación',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.4.2') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '9.4.2 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '9.4.2 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.4.3') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '9.4.3 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '9.4.3 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '9.4.4') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '9.4.4 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '9.4.4 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '11.1.1') {
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: '¿Qué son y cuáles son?',
                value: '¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué son y cuáles son?',
              },
              {
                title: '¿Qué hacer si tengo alguno?',
                value: '¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué hacer si tengo alguno?',
              },
              {
                title: 'Información de donde acudir',
                value: '¿Qué te gustaría saber sobre conflictos con la ley? Información de donde acudir',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '11.2.1') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '11.2.1 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '11.2.1 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '11.3.1') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '11.3.1 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '11.3.1 ¿Te sirvió la información? No',
              },
            ],
          },
          user: BOT_USER
        };
  
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, [msg])
        }));

    } else if (action === '11.4.1') { //Intent de información
        let msg = {
          _id: this.state.messages.length + 1,
          text,
          createdAt: new Date(),
          quickReplies: {
            type: 'radio',
            keepIt: true,
            values: [
              {
                title: 'Sí',
                value: '11.4.1 ¿Te sirvió la información? Sí',
              },
              {
                title: 'No',
                value: '11.4.1 ¿Te sirvió la información? No',
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

//Action: 1.1.2
  if (quickReplies[0].value === '¿Qué tema quieres hablar? Futuro') {
    Dialogflow_V2.requestEvent(
        "Futuro",
        {param1: "Futuro"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Qué tema quieres hablar? Sexualidad') {
    Dialogflow_V2.requestEvent(
        "Sexualidad",
        {param1: "Sexualidad"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Qué tema quieres hablar? Conflictos_ley') {
    Dialogflow_V2.requestEvent(
        "Conflicto_ley",
        {param1: "Conflicto_ley"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 1.2.2
  else if (quickReplies[0].value === '¿Hablar de otro tema? Sí') {
    Dialogflow_V2.requestEvent(
        "Hablar_si",
        {param1: "Hablar_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Hablar de otro tema? No') {
    Dialogflow_V2.requestEvent(
        "Hablar_no",
        {param1: "Hablar_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.1.1
  else if (quickReplies[0].value === '¿Cómo te ves en 2 años? Trabajando') {
    Dialogflow_V2.requestEvent(
        "Trabajando",
        {param1: "Trabajando"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Cómo te ves en 2 años? Estudiando') {
    Dialogflow_V2.requestEvent(
        "Estudiando",
        {param1: "Estudiando"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Cómo te ves en 2 años? Otro') {
    Dialogflow_V2.requestEvent(
        "Otro_futuro",
        {param1: "Otro_futuro"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Cómo te ves en 2 años? No sé') {
    Dialogflow_V2.requestEvent(
        "No_se_futuro",
        {param1: "No_se_futuro"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Cómo te ves en 2 años? Estudiando y Trabajando') {
    Dialogflow_V2.requestEvent(
        "Event345",
        {param1: "Event345"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.2.1
  else if (quickReplies[0].value === '¿En qué trabajarás? Mecánico' || quickReplies[0].value === '¿En qué trabajarás? Vendedor ambulante' || quickReplies[0].value === '¿En qué trabajarás? Repartidor' || quickReplies[0].value === '¿En qué trabajarás? Chofer' || quickReplies[0].value === '¿En qué trabajarás? Albañil') {
    Dialogflow_V2.requestEvent(
        "Trabajando_1",
        {param1: "Trabajando_1"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿En qué trabajarás? Otro') {
    Dialogflow_V2.requestEvent(
        "Trabajando_otro1",
        {param1: "Trabajando_otro1"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.2.3
  else if (quickReplies[0].value === '¿Por qué vas a trabajar? Necesito dinero' || quickReplies[0].value === '¿Por qué vas a trabajar? No quiero seguir estudiando'  || quickReplies[0].value === '¿Por qué vas a trabajar? Tradición familiar' ) {
    Dialogflow_V2.requestEvent(
        "Trabajando_2",
        {param1: "Trabajando_2"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Por qué vas a trabajar? Otro') {
    Dialogflow_V2.requestEvent(
        "Trabajando_otro2",
        {param1: "Trabajando_otro2"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.2.5
  else if (quickReplies[0].value === '¿Realmente quieres trabajar ahí? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Event326",
        {param1: "Event326"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Realmente quieres trabajar ahí? No') {
    Dialogflow_V2.requestEvent(
        "Realmente_no",
        {param1: "Realmente_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.2.6
  else if (quickReplies[0].value === '3.2.6 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '3.2.6 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.2.7
  else if (quickReplies[0].value === '3.2.7 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '3.2.7 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.3.1
  else if (quickReplies[0].value === '¿Qué estudias actualmente? Secundaría') {
    Dialogflow_V2.requestEvent(
        "Estudiando_secundaria",
        {param1: "Estudiando_secundaria"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Qué estudias actualmente? Preparatoría') {
    Dialogflow_V2.requestEvent(
        "Estudiando_preparatoria",
        {param1: "Estudiando_preparatoria"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.3.2
  else if (quickReplies[0].value === '¿En que prepa estudias? UdeG' || quickReplies[0].value === '¿En que prepa estudias? Conalep' || quickReplies[0].value === '¿En que prepa estudias? Cecytej' || quickReplies[0].value === '¿En que prepa estudias? Cobaej' || quickReplies[0].value === '¿En que prepa estudias? No sé') {
    Dialogflow_V2.requestEvent(
        "Event336",
        {param1: "Event336"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿En que prepa estudias? Otro') {
    Dialogflow_V2.requestEvent(
        "Estudiando_preparatoria2",
        {param1: "Estudiando_preparatoria2"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.3.4
  else if (quickReplies[0].value === '¿En que prepa estudiarás? UdeG' || quickReplies[0].value === '¿En que prepa estudiarás? Conalep' || quickReplies[0].value === '¿En que prepa estudiarás? Cecytej' || quickReplies[0].value === '¿En que prepa estudiarás? Cobaej' || quickReplies[0].value === '¿En que prepa estudiarás? No sé') {
    Dialogflow_V2.requestEvent(
        "Event336",
        {param1: "Event336"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿En que prepa estudiarás? Otro') {
    Dialogflow_V2.requestEvent(
        "Estudiando_secundaria2",
        {param1: "Estudiando_secundaria2"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.3.6
  else if (quickReplies[0].value === '¿Planeas estudiar la universidad? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Universidad_si",
        {param1: "Universidad_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Planeas estudiar la universidad? No') {
    Dialogflow_V2.requestEvent(
        "Event339",
        {param1: "Event339"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.3.7
  else if (quickReplies[0].value === '¿Ya sabes lo que quieres estudiar? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Estudiar_si",
        {param1: "Estudiar_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Ya sabes lo que quieres estudiar? No') {
    Dialogflow_V2.requestEvent(
        "Event339",
        {param1: "Event339"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.3.8
  else if (quickReplies[0].value === '¿Qué estudiarás? Ciencias sociales o Humanidades/Artes' || quickReplies[0].value === '¿Qué estudiarás? Ciencias exactas o Ingeniería' || quickReplies[0].value === '¿Qué estudiarás? Ciencias Económico Administrativas' || quickReplies[0].value === '¿Qué estudiarás? Ciencias de la salud' || quickReplies[0].value === '¿Qué estudiarás? No sé') {
    Dialogflow_V2.requestEvent(
        "Event339",
        {param1: "Event339"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.3.9
  else if (quickReplies[0].value === '3.3.9 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '3.3.9 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.4.2
  else if (quickReplies[0].value === '¿Quién te ha influenciado a planear eso? Familia' || quickReplies[0].value === '¿Quién te ha influenciado a planear eso? Amigos' || quickReplies[0].value === '¿Quién te ha influenciado a planear eso? Youtubers' || quickReplies[0].value === '¿Quién te ha influenciado a planear eso? Internet') {
    Dialogflow_V2.requestEvent(
        "Otro_futuro1",
        {param1: "Otro_futuro1"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Quién te ha influenciado a planear eso? Otro') {
    Dialogflow_V2.requestEvent(
        "Otro_futuro2",
        {param1: "Otro_futuro2"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.4.4
  else if (quickReplies[0].value === '¿Crees que vayas a progresar ahí? Sí' || quickReplies[0].value === '¿Crees que vayas a progresar ahí? No') {
    Dialogflow_V2.requestEvent(
        "Event345",
        {param1: "Event345"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.4.5
  else if (quickReplies[0].value === '¿Qué preferirías? Trabajar') {
    Dialogflow_V2.requestEvent(
        "Event326",
        {param1: "Event326"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Qué preferirías? Estudiar') {
    Dialogflow_V2.requestEvent(
        "Event339",
        {param1: "Event339"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.5.1
  else if (quickReplies[0].value === '¿Tienes algún sueño? Deportista' || quickReplies[0].value === '¿Tienes algún sueño? Músico' || quickReplies[0].value === '¿Tienes algún sueño? Cientifico' || quickReplies[0].value === '¿Tienes algún sueño? Youtuber' || quickReplies[0].value === '¿Tienes algún sueño? No') {
    Dialogflow_V2.requestEvent(
        "3-4-5Event",
        {param1: "3-4-5Event"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Tienes algún sueño? Otro') {
    Dialogflow_V2.requestEvent(
        "No_se_futuro2",
        {param1: "No_se_futuro2"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 3.5.3
  else if (quickReplies[0].value === '¿Crees poder alcanzar ese sueño? Sí' || quickReplies[0].value === '¿Crees poder alcanzar ese sueño? No') {
    Dialogflow_V2.requestEvent(
        "Event345",
        {param1: "Event345"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.1.1
  else if (quickReplies[0].value === '¿Sobre qué tema te gustaría saber? Sexo' ) {
    Dialogflow_V2.requestEvent(
        "Sexo",
        {param1: "Sexo"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Sobre qué tema te gustaría saber? Embarazos') {
    Dialogflow_V2.requestEvent(
        "Embarazo",
        {param1: "Embarazo"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Sobre qué tema te gustaría saber? Orientación sexual') {
    Dialogflow_V2.requestEvent(
        "Orientacion_sexual",
        {param1: "Orientacion_sexual"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.2.1
  else if (quickReplies[0].value === '¿Qué te gustaría saber sobre sexo? Faje' ) {
    Dialogflow_V2.requestEvent(
        "Sexo1",
        {param1: "Sexo1"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Qué te gustaría saber sobre sexo? Sexo') {
    Dialogflow_V2.requestEvent(
        "Sexo2",
        {param1: "Sexo2"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Qué te gustaría saber sobre sexo? Indecision') {
    Dialogflow_V2.requestEvent(
        "Sexo3",
        {param1: "Sexo3"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Qué te gustaría saber sobre sexo? Sexo no consentido') {
    Dialogflow_V2.requestEvent(
        "Sexo4",
        {param1: "Sexo4"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.2.2
  else if (quickReplies[0].value === '9.2.2 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '9.2.2 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.2.3
  else if (quickReplies[0].value === '¿De qué te gustaría hablar en temas de sexo? Métodos anticonceptivos' ) {
    Dialogflow_V2.requestEvent(
        "Coito1",
        {param1: "Coito1"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿De qué te gustaría hablar en temas de sexo? Enfermedades de transmisión sexual') {
    Dialogflow_V2.requestEvent(
        "Coito2",
        {param1: "Coito2"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.2.4
  else if (quickReplies[0].value === '9.2.4 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '9.2.4 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.2.5
  else if (quickReplies[0].value === '9.2.5 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '9.2.5 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.2.6
  else if (quickReplies[0].value === '9.2.6 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '9.2.6 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.2.7
  else if (quickReplies[0].value === '9.2.7 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '9.2.7 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.3.1
  else if (quickReplies[0].value === '¿Cuál es tu duda sobre el embarazo? ¿Cómo se puede quedar embarazada?' ) {
    Dialogflow_V2.requestEvent(
        "Embarazo1",
        {param1: "Embarazo1"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Cuál es tu duda sobre el embarazo? Síntomas') {
    Dialogflow_V2.requestEvent(
        "Embarazo2",
        {param1: "Embarazo2"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Cuál es tu duda sobre el embarazo? ¿Qué hacer si sospecho que lo estoy?') {
    Dialogflow_V2.requestEvent(
        "Embarazo3",
        {param1: "Embarazo3"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Cuál es tu duda sobre el embarazo? ¿A quién puedo acudir?') {
    Dialogflow_V2.requestEvent(
        "Embarazo4",
        {param1: "Embarazo4"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Cuál es tu duda sobre el embarazo? Opciones si estoy embarazada') {
    Dialogflow_V2.requestEvent(
        "Embarazo5",
        {param1: "Embarazo5"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.3.2
  else if (quickReplies[0].value === '9.3.2 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '9.3.2 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.3.3
  else if (quickReplies[0].value === '9.3.3 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '9.3.3 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.3.4
  else if (quickReplies[0].value === '9.3.4 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '9.3.4 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.3.5
  else if (quickReplies[0].value === '9.3.5 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '9.3.5 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.3.6
  else if (quickReplies[0].value === '9.3.6 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '9.3.6 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.4.1
  else if (quickReplies[0].value === '¿Qué te gustaría conocer sobre este tema de orientación? ¿Qué es?' ) {
    Dialogflow_V2.requestEvent(
        "Orientacion1",
        {param1: "Orientacion1"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Qué te gustaría conocer sobre este tema de orientación? ¿Cuantos y cuáles tipos hay?') {
    Dialogflow_V2.requestEvent(
        "Orientacion2",
        {param1: "Orientacion2"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Qué te gustaría conocer sobre este tema de orientación? He sufrido discriminación') {
    Dialogflow_V2.requestEvent(
        "Orientacion3",
        {param1: "Orientacion3"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.4.2
  else if (quickReplies[0].value === '9.4.2 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '9.4.2 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.4.3
  else if (quickReplies[0].value === '9.4.3 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '9.4.3 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 9.4.4
  else if (quickReplies[0].value === '9.4.4 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '9.4.4 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 11.1.1
  else if (quickReplies[0].value === '¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué son y cuáles son?' ) {
    Dialogflow_V2.requestEvent(
        "Definicion",
        {param1: "Definicion"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué hacer si tengo alguno?') {
    Dialogflow_V2.requestEvent(
        "Que_hacer",
        {param1: "Que_hacer"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '¿Qué te gustaría saber sobre conflictos con la ley? Información de donde acudir') {
    Dialogflow_V2.requestEvent(
        "Informacion",
        {param1: "Informacion"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 11.2.1
  else if (quickReplies[0].value === '11.2.1 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '11.2.1 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 11.3.1
  else if (quickReplies[0].value === '11.3.1 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '11.3.1 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  }
  //Action: 11.4.1
  else if (quickReplies[0].value === '11.4.1 ¿Te sirvió la información? Sí' ) {
    Dialogflow_V2.requestEvent(
        "Sirvio_si",
        {param1: "Sirvio_si"},
        result=>this.handleGoogleResponse(result),
        error=>{console.log(error);}
    )
  } else if (quickReplies[0].value === '11.4.1 ¿Te sirvió la información? No') {
    Dialogflow_V2.requestEvent(
        "Sirvio_no",
        {param1: "Sirvio_no"},
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
          onSend={messages => [this.onSend(messages), firebaseSvc.send(messages)]}
          user={{
            _id: dialogflowConfig.session_id
          }}
          renderQuickReplies={(props) => <QuickReplies color='white' {...props} />}
          onQuickReply={(quickReplies) => <QuickReplies onPress={this.onTriggerEvent(quickReplies), this.onSendQuickReplies(quickReplies, dialogflowConfig)} />}
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