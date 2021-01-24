import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, SafeAreaView, ScrollView, Linking} from 'react-native';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';

class Contacts extends Component {

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
        
          <ImageBackground source={require('../../assets/images/12.jpg')} style={styles.image}>
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
            <SafeAreaView>
              <Text style={styles.titleText}>Contactos de Ayuda</Text>
              
              <Text style={styles.specialText}>Instituciones para tratar problemas para la juventud y la salud mental</Text>
              <ScrollView horizontal={true} contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/SAL.png')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Instuto Jalisciense de Salud Mental SALME</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://salme.jalisco.gob.mx/')}>Página Web</Text>
                    <Text style={styles.specialText1}>Tel: 33 30 30 99 00</Text>
                  </View>
                </View>

                <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/JJ.png')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Juventudes Jalisco</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/juventudesjalisco/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 38 57 67 73</Text>
                  </View>
                </View>

                <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/IJZ.png')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Instituto de la Juventud Zapopan</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/juventudzapopan/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 38 18 22 00 ext. 3819</Text>
                  </View>
                </View>

                <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/IMAJ.jpg')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Instituto Municipal de Atención a la Juventud de Guadalajara</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.imajguadalajara.gob.mx/')}>Página Web</Text>
                    <Text style={styles.specialText1}>Tel: 33 15 25 45 99</Text>
                  </View>
                </View>
              </ScrollView>

              <Text style={styles.specialText}>Desarrollo Integral de la Familia (DIF)</Text>
              <ScrollView horizontal={true} contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/DJ.jpg')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Sistema DIF Jalisco</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/difjalisco/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 30 30 38 00</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/DZ.jpg')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>DIF Zapopan</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/dif.zapopan/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 38 36 34 44</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/DG.png')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>DIF Guadalajara</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/dif.guadalajara/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 38 48 50 23</Text>
                  </View>
              </View>
              </ScrollView>

              <Text style={styles.specialText}>Salud y Hospitales</Text>
              <ScrollView horizontal={true} contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/SSJ.png')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Secretaría de Salud Jalisco</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/SaludJalisco')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 14 22 78 05</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/HC.jpg')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Hospital Civil de Guadalajara</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('http://www.hcg.udg.mx/')}>Página Web</Text>
                    <Text style={styles.specialText1}>Tel: 33 38 83 44 00</Text>
                  </View>
              </View>
              
              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/SZ.jpg')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Salud Zapopan</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/SaludZapopan/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 36 33 09 29</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/HCG.jpg')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Hospital civil "Dr Juan I Menchaca"</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/NHCGJIM/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 36 18 93 62</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/HCG.jpg')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Antiguo Hospital Civil de Guadalajara "Fray Antonio Alcalde"</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/AntiguoHospitalCivildeGuadalajara/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 36 58 32 17</Text>
                  </View>
              </View>
              </ScrollView>

              <Text style={styles.specialText}>Instituciones para la Igualdad de Género</Text>
              <ScrollView horizontal={true} contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/SI.jpg')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Secretaría de Igualdad Sustantiva entre Mujeres y Hombres</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/IgualdadJalisco/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 36 58 31 70</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/MZ.png')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>InMujeres Zapopan</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/InMujeresZapopan/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 38 18 22 00</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/ME.jpg')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Mujeres Empoderadas A.C.</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/mujeresempoderadasac/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}></Text>
                  </View>
              </View>
              </ScrollView>

              <Text style={styles.specialText}>Gobierno</Text>
              <ScrollView horizontal={true} contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/GJ.png')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Gobierno de Jalisco</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/GobiernoJalisco/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 36 68 18 00</Text>
                  </View>
              </View>
              
              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/GZ.png')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Gobierno de Zapopan</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/ZapopanGob/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 38 18 22 00</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={require('../../assets/images/imageContacts/GG.png')}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Gobierno de Guadalajara</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/GuadalajaraGob/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 38 37 44 00</Text>
                  </View>
                </View>
              </ScrollView>


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
    viewCard: {
      width: 200, 
      height: 250, 
      flexDirection: 'row', 
      margin: 4,
    },
    imageCard: {
      width: 200, 
      height: 250, 
      position: 'absolute', 
      borderRadius:30,
      borderColor: 'black',
      borderWidth: 4,
    },
    viewHalfCard: {
      flex: 1,
      height: 140,
      backgroundColor: 'rgba(0, 0, 0, 0.45)', 
      alignSelf: 'flex-end', 
      borderBottomLeftRadius:30, 
      borderBottomRightRadius:30
    },
    titleText: {
      padding: 10,
      flexShrink: 1,
      fontSize: 35,
      color: 'white',
      textShadowColor: 'black',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 10,
      fontWeight: 'bold',
      textAlign: 'center' 
    },
    specialText: {
      padding: 20,
      flexShrink: 1,
      fontSize: 22,
      color: 'white',
      fontWeight: 'bold',
      textShadowColor: 'royalblue',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 5,
      textAlign: 'center'
    },
    specialText1: {
      padding: 8,
      flexShrink: 1,
      marginBottom: 'auto',
      marginTop: 'auto',
      fontSize: 15,
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
    linkText: {
      color: 'white', 
      margin: 6, 
      color: 'royalblue', 
      textDecorationLine: 'underline',
      fontWeight: 'bold',
      textShadowColor: 'black',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 5,
      textAlign: 'center', 
      fontSize: 18
    },
  });

  export default Contacts;