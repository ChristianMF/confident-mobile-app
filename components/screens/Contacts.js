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
              <ScrollView horizontal={true}>
                <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/53806371_1356743611169292_1909481046064234496_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=sZD8T_A6hggAX_nCXi1&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=dcc7ecbaf39a16e6dab0d97f35fbb95e&oe=5F8CE152' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Instuto Jalisciense de Salud Mental SALME</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://salme.jalisco.gob.mx/')}>Página</Text>
                    <Text style={styles.specialText1}>Tel: 3030-9900</Text>
                  </View>
                </View>

                <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/67328366_399746980900033_3439503741571563520_n.png?_nc_cat=107&_nc_sid=85a577&_nc_ohc=R9GUDkdrYGsAX-yru0b&_nc_ht=scontent-qro1-1.xx&oh=76ac494a0b73bcc8449e1d96a886a27f&oe=5F8D50BF' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Juventudes Jalisco</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/juventudesjalisco/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 3857 6773</Text>
                  </View>
                </View>

                <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/32072728_10156045343686638_3641895760338878464_o.png?_nc_cat=103&_nc_sid=85a577&_nc_ohc=QuNLFg9wIREAX_E9CYn&_nc_ht=scontent.fgdl5-2.fna&oh=67a22715909486582ea61988aa7e80f8&oe=5F8CBE7A' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Instituto de la Juventud Zapopan</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/juventudzapopan/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 38182200 ext. 3819</Text>
                  </View>
                </View>

                <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/17362705_786559851498019_7296100881173248244_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=s20zN6Nil0kAX8u9N5u&_nc_ht=scontent.fgdl5-2.fna&oh=a2f074a34a7f4446e36e78b7d20acfb8&oe=5F8ECB9A' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Instituto Municipal de Atención a la Juventud de Guadalajara</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.imajguadalajara.gob.mx/')}>Página</Text>
                    <Text style={styles.specialText1}>Tel: (33) 1525-4599</Text>
                  </View>
                </View>
              </ScrollView>

              <Text style={styles.specialText}>Desarrollo Integral de la Familia (DIF)</Text>
              <ScrollView horizontal={true}>
              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/119828919_4366636236740897_5061399266798662408_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=KHJD29FWTFwAX__IEZe&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=5f054bfdf27c180b2b2b6ad776fed7ef&oe=5F8F1BF9' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Sistema DIF Jalisco</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/difjalisco/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 3030 3800</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/12122799_1656736464572916_833066231219164458_n.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_ohc=_Xoty63PzskAX-mc4nd&_nc_oc=AQkgh49Itq2FMABzA_08KCC6DxiPuXP9I9kfFeRUAVqTqewj3bgVYbZxapmViM9H148&_nc_ht=scontent.fgdl5-2.fna&oh=459f7641d25f10ad189db31d93c331c9&oe=5F8F7D8A' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>DIF Zapopan</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/dif.zapopan/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 38363444</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/61757025_2038859932889343_7481538970401112064_o.png?_nc_cat=102&_nc_sid=85a577&_nc_ohc=KSDCwNUa6PcAX9oZaiQ&_nc_oc=AQnneh3dHoHwEMR7fN-4L9RfKdYNv50oYXy3Ho2DufBcc_WHfVZQcOD_5vfRSm5HUhk&_nc_ht=scontent.fgdl5-2.fna&oh=35a012f425a06ed3393165c318b114e6&oe=5F8CB4B7' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>DIF Guadalajara</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/dif.guadalajara/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 3848-5023</Text>
                  </View>
              </View>
              </ScrollView>

              <Text style={styles.specialText}>Salud y Hospitales</Text>
              <ScrollView horizontal={true}>
              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/p960x960/57221401_1358548110953812_12030010122567680_o.png?_nc_cat=108&_nc_sid=85a577&_nc_ohc=v-g8K-rio2gAX98lT4i&_nc_ht=scontent-qro1-1.xx&oh=a7d5446829db8ceb921f55989a05163b&oe=5F8FF4BD' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Secretaría de Salud Jalisco</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('http://www.hcg.udg.mx/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 1422 7805</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/67663222_2937888872951201_4230852857428967424_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=5wDOkngOHKoAX-bEcF6&_nc_ht=scontent.fgdl5-2.fna&oh=5fd3c83be404db8a8a82ac455a858b7e&oe=5F8E02B3' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Hospital Civil de Guadalajara</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('http://www.hcg.udg.mx/')}>Página</Text>
                    <Text style={styles.specialText1}>Tel: (33) 38 83 44 00</Text>
                  </View>
              </View>
              
              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent-qro1-1.xx.fbcdn.net/v/t31.0-8/p960x960/26233627_1651034198295530_8322475303711148899_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=-vMtyJjkrgMAX82ba6R&_nc_ht=scontent-qro1-1.xx&tp=6&oh=56f0eadc412d0691bb390779ccfc9d93&oe=5F8E37D6' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Salud Zapopan</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/SaludZapopan/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 36330929</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/p960x960/51079036_2494417030580687_52834316853444608_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=sd0kdBR6lDoAX8Zl_Mm&_nc_ht=scontent-qro1-1.xx&tp=6&oh=0e6a7d555906b3230536fb5f41f83d0a&oe=5F8E3F06' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Hospital civil "Dr Juan I Menchaca"</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/NHCGJIM/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 36189362</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t31.0-8/p960x960/10636898_384011121763352_8756521571506171604_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=BfyOyZXr5pkAX9oRGpS&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=4f1607b9936f7994c401d8411f519df3&oe=5F8DD272' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Antiguo Hospital Civil de Guadalajara "Fray Antonio Alcalde"</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/AntiguoHospitalCivildeGuadalajara/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 3658 3217</Text>
                  </View>
              </View>
              </ScrollView>

              <Text style={styles.specialText}>Instituciones para la Igualdad de Género</Text>
              <ScrollView horizontal={true}>
              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/104118451_608750849746066_7678262980631228455_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=BxX3bBx9-PQAX_yeked&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=689acfdbe47e7b9bddb5e2501257d32a&oe=5F8DE7FC' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Secretaría de Igualdad Sustantiva entre Mujeres y Hombres</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/IgualdadJalisco/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 36583170</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/p960x960/72232454_1640290982769179_1121151309395787776_o.jpg?_nc_cat=104&_nc_sid=7aed08&_nc_ohc=OlCQW53ot94AX8N4ksA&_nc_ht=scontent-qro1-1.xx&tp=6&oh=743a2a5ce4bdf16633b327fea0bff65d&oe=5F8F73E9' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>InMujeres Zapopan</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/InMujeresZapopan/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 3818 2200</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/62258363_2129120060547707_2824157961687924736_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=AZlAcxz04V4AX9siULL&_nc_ht=scontent-qro1-1.xx&oh=ff86fc47df9fe3bad46800156463f7f5&oe=5F8EE321' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Mujeres Empoderadas A.C.</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/mujeresempoderadasac/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}></Text>
                  </View>
              </View>
              </ScrollView>

              <Text style={styles.specialText}>Gobierno</Text>
              <ScrollView horizontal={true}>
              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/47363150_10156176407872568_8777376237631832064_n.png?_nc_cat=1&_nc_sid=7aed08&_nc_ohc=r1f3Ugpi34UAX9mZjw_&_nc_ht=scontent.fgdl5-2.fna&oh=fcc142185ef6b969371c3dfba14173a4&oe=5F905E30' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Gobierno de Jalisco</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/GobiernoJalisco/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 3668 1800</Text>
                  </View>
              </View>
              
              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/36889546_10156199998925090_6410579305956376576_n.png?_nc_cat=103&_nc_sid=85a577&_nc_ohc=9gdLIetgqb0AX_LMxTa&_nc_oc=AQkdael3q_Sg9SYXkH6K9zbyWp8Qjwjj4ag6-qNVvda6OQOA3_cDjd_njBL33nrK63U&_nc_ht=scontent.fgdl5-2.fna&oh=c653a109e0db90a9f9c1d3610e9795ea&oe=5F8FDA64' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Gobierno de Zapopan</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/ZapopanGob/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 33 3818 2200</Text>
                  </View>
              </View>

              <View style={styles.viewCard}>
                  <Image style={styles.imageCard} source={{ uri: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/42950874_2198457663532018_5746905454546518016_o.png?_nc_cat=102&_nc_sid=85a577&_nc_ohc=XKlHNd5Fk5cAX8S8w9u&_nc_ht=scontent.fgdl5-2.fna&oh=b26efd71e9938dc89ddf93f0cabcb166&oe=5F8D8532' }}/>
                  <View style={styles.viewHalfCard}>
                    <Text style={styles.specialText1}>Gobierno de Guadalajara</Text>
                    <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.facebook.com/GuadalajaraGob/')}>Página de Facebook</Text>
                    <Text style={styles.specialText1}>Tel: 38374400</Text>
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