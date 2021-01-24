import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import firebaseSvc from '../dataBaseLogic/FirebaseSvc';

class PrivacyPolicy extends Component {

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

    onSend1() {
      let user = {
        _id: sessionId
      };
      let messages = [
        {
          _id: sessionId,
          text: 'Análisis de lenguaje para poder seguir actualizando el chatbot',
          createdAt: new Date(),
          user: sessionId
        }
      ];
      firebaseSvc.send(messages);
    }

    onSend2() {
      let user = {
        _id: sessionId
      };
      let messages = [
        {
          _id: sessionId,
          text: 'Análisis de sentimientos para la realización de estudios e investigaciones científicas',
          createdAt: new Date(),
          user: sessionId
        }
      ];
      firebaseSvc.send(messages);
    }

    onSend3() {
      let user = {
        _id: sessionId
      };
      let messages = [
        {
          _id: sessionId,
          text: 'Recopilación de respuestas, opciones elegidas y palabras vertidas al chat para generar reportes estadísticos y propuestas a políticas públicas',
          createdAt: new Date(),
          user: sessionId
        }
      ];
      firebaseSvc.send(messages);
    }

render() {

    if (!this.state.fontLoaded) {
      return null; // render some progress indicator
    }
  
    const {navigate} =this.props.navigation;
  
      return (
        
          <ImageBackground source={require('../../assets/images/6.jpg')} style={styles.image}>
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
              <Text style={styles.titleText}>Aviso de Privacidad</Text>
              <Text style={styles.normalText}>Chatbot CONFIDENT, mejor conocido como CONFIDENT, con domicilio en calle Periférico Norte N° 799., colonia Núcleo Universitario Los Belenes, ciudad Zapopan, municipio o delegación Zapopan, c.p. 45100, en la entidad de Jalisco, país México, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</Text>
              <Text style={styles.specialText}>¿Para qué fines utilizaremos sus datos personales?</Text>
              <Text style={styles.normalText}>De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:</Text>
              <Text style={styles.indentText}>{'\u2B50'}Análisis de lenguaje para poder seguir actualizando el chatbot</Text>
              <Text style={styles.indentText}>{'\u2B50'}Análisis de sentimientos para la realización de estudios e investigaciones científicas</Text>
              <Text style={styles.indentText}>{'\u2B50'}Recopilación de respuestas, opciones elegidas y palabras vertidas al chat para generar reportes estadísticos y propuestas a políticas públicas</Text>
              <Text style={styles.normalText}>En caso de que no desee que sus datos personales se utilicen para estos fines secundarios, indíquelo a continuación (presiona sobre la opción):</Text>
              <Text style={styles.normalText}>No consiento que mis datos personales se utilicen para los siguientes fines:</Text>
              
              <TouchableOpacity style={styles.optionButton} onPress={()=> [alert('Se ha enviado tu solicitud. Cualquier duda contactar directamente con: botconfident@gmail.com ¡Gracias!'), this.onSend1()]}>
              <Text style={styles.textOptionButton}>Análisis de lenguaje para poder seguir actualizando el chatbot</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={()=> [alert('Se ha enviado tu solicitud. Cualquier duda contactar directamente con: botconfident@gmail.com ¡Gracias!'), this.onSend2()]}>
              <Text style={styles.textOptionButton}>Análisis de sentimientos para la realización de estudios e investigaciones científicas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={()=> [alert('Se ha enviado tu solicitud. Cualquier duda contactar directamente con: botconfident@gmail.com ¡Gracias!'), this.onSend3()]}>
              <Text style={styles.textOptionButton}>Recopilación de respuestas, opciones elegidas y palabras vertidas al chat para generar reportes estadísticos y propuestas a políticas públicas</Text>
              </TouchableOpacity>

              <Text style={styles.normalText}>La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios y productos que solicita o contrata con nosotros.</Text>
              <Text style={styles.specialText}>¿Qué datos personales utilizaremos para estos fines?</Text>
              <Text style={styles.normalText}>Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:</Text>
              <Text style={styles.indentText}>{'\u2B50'}Edad</Text>
              <Text style={styles.indentText}>{'\u2B50'}Género</Text>
              <Text style={styles.indentText}>{'\u2B50'}Ubicación</Text>
              <Text style={styles.normalText}>Además de los datos personales mencionados anteriormente, para las finalidades informadas en el presente aviso de privacidad utilizaremos los siguientes datos personales considerados como sensibles, que requieren de especial protección:</Text>
              <Text style={styles.indentText}>{'\u2B50'}Ubicación</Text>
              <Text style={styles.specialText}>¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso?</Text>
              <Text style={styles.normalText}>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.</Text>
              <Text style={styles.normalText}>Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del siguiente medio:</Text>
              <Text style={styles.indentText}>{'\u2B50'}Por medio del correo electrónico</Text>
              <Text style={styles.normalText}>Con relación al procedimiento y requisitos para el ejercicio de sus derechos ARCO, le informamos lo siguiente:</Text>
              <Text style={styles.indentText}>a) ¿A través de qué medios pueden acreditar su identidad el titular y, en su caso, su representante, así como la personalidad este último?{"\n"}Contacto por correo electrónico</Text>
              <Text style={styles.indentText}>b) ¿Qué información y/o documentación deberá contener la solicitud?{"\n"}Nombre, edad, género, úbicación, fecha(s) de utilización del servicio y correo electrónico</Text>
              <Text style={styles.indentText}>c) ¿En cuántos días le daremos respuesta a su solicitud?{"\n"}En un máximo de 7 días hábiles</Text>
              <Text style={styles.indentText}>d) ¿Por qué medio le comunicaremos la respuesta a su solicitud?{"\n"}Correo electrónico</Text>
              <Text style={styles.indentText}>e) ¿En qué medios se pueden reproducir los datos personales que, en su caso, solicite?{"\n"}Correo electrónico</Text>
              <Text style={styles.normalText}>Los datos de contacto de la persona o departamento de datos personales, que está a cargo de dar trámite a las solicitudes de derechos ARCO, son los siguientes:</Text>
              <Text style={styles.indentText}>a) Nombre de la persona o departamento de datos personales: CONFIDENT</Text>
              <Text style={styles.indentText}>b) Domicilio: calle Periférico Norte N° 799, colonia Núcleo Universitario Los Belenes, ciudad ZAPOPAN, municipio o delegación ZAPOPAN, c.p. 45100, en la entidad de JALISCO, país MÉXICO</Text>
              <Text style={styles.indentText}>c) Correo electrónico: botconfident@gmail.com</Text>
              <Text style={styles.specialText}>Usted puede revocar su consentimiento para el uso de sus datos personales</Text>
              <Text style={styles.normalText}>Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.</Text>
              <Text style={styles.normalText}>Para revocar su consentimiento deberá presentar su solicitud a través del siguiente medio:</Text>
              <Text style={styles.indentText}>{'\u2B50'}Contacto en correo electrónico</Text>
              <Text style={styles.normalText}>Con relación al procedimiento y requisitos para la revocación de su consentimiento, le informamos lo siguiente:</Text>
              <Text style={styles.indentText}>a) ¿A través de qué medios pueden acreditar su identidad el titular y, en su caso, su representante, así como la personalidad este último?{"\n"}Correo electrónico</Text>
              <Text style={styles.indentText}>b) ¿Qué información y/o documentación deberá contener la solicitud?{"\n"}Nombre, edad, género, úbicación, fecha(s) de utilización del servicio y correo electrónico</Text>
              <Text style={styles.indentText}>c) ¿En cuántos días le daremos respuesta a su solicitud?{"\n"}Un máximo de 7 dias hábiles</Text>
              <Text style={styles.indentText}>d) ¿Por qué medio le comunicaremos la respuesta a su solicitud?{"\n"}Correo electrónico</Text>
              <Text style={styles.specialText}>¿Cómo puede limitar el uso o divulgación de su información personal?</Text>
              <Text style={styles.normalText}>Con objeto de que usted pueda limitar el uso y divulgación de su información personal, le ofrecemos los siguientes medios:</Text>
              <Text style={styles.indentText}>{'\u2B50'}Por medio del correo electrónico</Text>
              <Text style={styles.specialText}>El uso de tecnologías de rastreo en nuestro portal de internet</Text>
              <Text style={styles.normalText}>Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que recabamos a través de estas tecnologías, los utilizaremos para los siguientes fines:</Text>
              <Text style={styles.indentText}>{'\u2B50'}Análisis de lenguaje para poder seguir actualizando el chatbot</Text>
              <Text style={styles.indentText}>{'\u2B50'}Análisis de sentimientos para la realización de estudios e investigaciones científicas</Text>
              <Text style={styles.indentText}>{'\u2B50'}Para recopilación de respuestas, opciones elegidas y palabras vertidas al chat para generar reportes estadísticos y propuestas a políticas públicas</Text>
              <Text style={styles.normalText}>Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:</Text>
              <Text style={styles.indentText}>{'\u2B50'}Asignación de un id a cada usuario</Text>
              <Text style={styles.indentText}>{'\u2B50'}Búsquedas realizadas por un usuario</Text>
              <Text style={styles.specialText}>¿Cómo puede conocer los cambios en este aviso de privacidad?</Text>
              <Text style={styles.normalText}>El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.</Text>
              <Text style={styles.normalText}>Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de: La misma plataforma.</Text>
              <Text style={styles.normalText}>El procedimiento a través del cual se llevarán a cabo las notificaciones sobre cambios o actualizaciones al presente aviso de privacidad es el siguiente:</Text>
              <Text style={styles.indentText}>{'\u2B50'}Se publicarán las modificaciones en el apartado de aviso de privacidad de la plataforma</Text>
              <Text style={styles.dateNormalText}>Última actualización: 12/10/2020</Text>

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
    optionButton: {
      width: '80%', 
      alignSelf:'center', 
      padding: 2, 
      borderWidth: 3,
      borderColor:'gold',
      borderRadius:15,
      marginTop: 5
    },
    textOptionButton: {
      color: 'white', 
      textAlign: 'center', 
      fontWeight: 'bold',
      textShadowColor: 'black',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 5,
      fontSize: 12
    },
    image: {
      flex: 1,
      resizeMode: "cover",
    },
    titleText: {
        padding: 10,
        flexShrink: 1,
        fontSize: 35,
        color: 'yellow',
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
    indentText: {
        padding: 8,
        flexShrink: 1,
        marginLeft: 25,
        fontSize: 12,
        color: 'white',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 5,
        textAlign: 'justify',
        lineHeight: 18,
    },
    dateNormalText: {
        padding: 8,
        flexShrink: 1,
        marginLeft: 'auto',
        fontSize: 12,
        color: 'white',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 5,
        textAlign: 'justify',
        lineHeight: 18,
    },    
  });

  export default PrivacyPolicy;