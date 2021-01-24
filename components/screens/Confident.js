import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
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
              <Text style={styles.normalText}>Desde la Universidad de Guadalajara se propone desarrollar una aplicación que ayude a prevenir y orientar a los adolescentes en situaciones de vulnerabilidad para enfrentar los problemas. Así como también, ayudar con el tema de resolución de dudas en cuento a temas de salud mental en jóvenes.</Text>
              <Text style={styles.normalText}>Es así, que, a raíz de estas convocatorias, nace el proyecto para desarrollar la aplicación llamada “Confident” (registrada con folio 8088 en la convocatoria Apps 2019 de COECYTJAL).</Text>
              <Text style={styles.normalText}>Confident es una plataforma que ofrece un asistente virtual, capaz de emprender un dialogo con jóvenes adolescentes, brindándoles contactos de ayuda relacionados a salud mental y física, temas y problemas juveniles e igualdad de género.</Text>
              <Text style={styles.normalText}>Tus datos siempre estarán seguros con nosotros pues contamos con protocolos de seguridad de la información. El usuario puede estar seguro del buen almacenamiento y tratamiento de sus datos, leyendo, aceptando o rechazando el aviso de privacidad. También el usuario puede detallar para que procesos específicos no quiere que se utilicen sus datos, dentro del mismo aviso.</Text>
              <Text style={styles.specialText}>Misión</Text>
              <Text style={styles.normalText}>En Confident nos dedicamos a ofrecer un servicio conversacional a jóvenes adolescentes, esencialmente en Zapopan, para la promoción de la salud mental. Priorizamos a nuestros usuarios dándoles atención en cualquier lugar, a cualquier hora, en cualquier plataforma, brindando una imagen amigable y sencilla.</Text>
              <Text style={styles.specialText}>Visión</Text>
              <Text style={styles.normalText}>Ser el principal servicio de promoción de la salud mental en jóvenes adolescentes, estando presente en su día a día y adaptándose a las circunstancias tecnológicas. De igual manera, producir información utilizable en la mejora de los servicios y políticas públicas enfocados al cuidado y desarrollo de la juventud mexicana.</Text>
              <Text style={styles.specialText}>Valores</Text>
              <Text style={styles.normalText}>{'\u2B50'}Responsabilidad: Coherencia en el manejo de la gestión empresarial y toma de decisiones.</Text>
              <Text style={styles.normalText}>{'\u2B50'}Integridad: Manejo estructurado y consiente de la información generada por los usuarios.</Text>
              <Text style={styles.normalText}>{'\u2B50'}Pasión: Apego por ofrecer siempre un buen servicio.</Text>
              <Text style={styles.normalText}>{'\u2B50'}Honestidad: Proporcionar a clientes y partes interesadas, una imagen e información clara y concisa.</Text>
              <Text style={styles.normalText}>{'\u2B50'}Transparencia: Evidenciar las buenas prácticas a las que está comprometida la estructura organizacional, tanto en el manejo de la información, como la puesta en marcha y gestión de los procesos.</Text>
              <Text style={styles.normalText}>{'\u2B50'}Adaptabilidad: Siempre adaptarse a las tecnologías más recientes en el mercado en cuanto a las plataformas tecnologías, se refiere.</Text>
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
      marginTop: 25,
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