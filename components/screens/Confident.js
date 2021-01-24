import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, SafeAreaView, ScrollView} from 'react-native';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';

class Confident extends Component {

    state = {
      fontLoaded: false,
    };
  
    componentDidMount() {
      this.loadAssetsAsync();
    }

    async loadAssetsAsync() {
        await Font.loadAsync({
          Chewy: require('../../assets/fonts/Chewy-Regular.ttf'),
        });
        this.setState({ fontLoaded: true });
    }


render() {

    if (!this.state.fontLoaded) {
      return null; // render some progress indicator
    }
  
    const {navigate} =this.props.navigation;
  
      return (
        
          <ImageBackground source={require('../../assets/images/9.jpg')} style={styles.image}>
          <View style={styles.myMenu}>
  
            <View style={styles.myTitle}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}>
              <Text style={styles.myText}>
                  Confident ✌️
              </Text>
            </TouchableOpacity>
            </View>
  
            <View style={styles.myButton}>
              <TouchableOpacity style={styles.actionButtonIcon1} onPress={()=> this.props.navigation.navigate('Confident')}>
                <Icon name="ios-home" style={styles.actionButtonIcon1}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButtonIcon2} onPress={()=> this.props.navigation.navigate('Contacts')}>
                <Icon name="ios-call" style={styles.actionButtonIcon2}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButtonIcon3} onPress={()=> this.props.navigation.navigate('PrivacyPolicy')}>
                <Icon name="ios-megaphone" style={styles.actionButtonIcon3}/>
              </TouchableOpacity>
            </View>
  
          </View>

          <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
            <SafeAreaView style={{width: '95%'}}>
              <Text style={styles.titleText}>¿Qué es Confident?</Text>
              <Text style={styles.normalText}>El Consejo Estatal de Ciencia y Tecnología de Jalisco (COECYTJAL) lanza la convocatoria Apps 2019 para financiar proyectos que tengan como ejes la atención a los jóvenes en temas de embarazo no deseado, deserción escolar y conflictos con la ley.</Text>
              <Text style={styles.normalText}>Desde la Universidad de Guadalajara se propone desarrollar una aplicación que ayude a prevenir y orientar ante problemas de adolescentes en situaciones de vulnerabilidad, así como también ayudar con el tema de resolución de dudas a los adolescentes de una forma anónima por medio de un asistente virtual. Una vez ganada la convocatoria, Confident, con folio 8088 se encuentra en la etapa 1 de 4. En el cual se gestiona la parte de recursos y estructura de la aplicación.</Text>
              <Text style={styles.specialText}>Misión</Text>
              <Text style={styles.normalText}>Ofrecer un espacio a través de la tecnología para la reducción de la tasa e índices relacionados a los problemas de los jóvenes y el combate a la desinformación en torno a sus dudas y problemas.</Text>
              <Text style={styles.specialText}>Visión</Text>
              <Text style={styles.normalText}>Ser la principal plataforma de ayudar a los jóvenes adolescentes de Zapopan, Jalisco, de forma principal, en su día a día, mediante sus dispositivos móviles, en plataformas como Android e iOS, dando a ellos un soporte a través de un asistente virtual que pueda detectar focos de atención e interés para orientarlos en caso de ser necesario con la información que buscan o con un especialista.</Text>
            </SafeAreaView>
          </ScrollView>

          </ImageBackground>
        
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
    },
    titleText: {
      padding: 10,
      flexShrink: 1,
      fontSize: 35,
      color: 'white',
      textShadowColor: 'white',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 10,
      fontWeight: 'bold',
      textAlign: 'center' 
  },
  specialText: {
      padding: 8,
      flexShrink: 1,
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      textShadowColor: 'black',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 5,
      textAlign: 'center'
  },  
  normalText: {
      padding: 8,
      flexShrink: 1,
      marginRight: 'auto',
      fontSize: 12,
      color: 'white',
      textShadowColor: 'black',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 5,
      textAlign: 'justify',
      lineHeight: 18,
  },
  });

  export default Confident;