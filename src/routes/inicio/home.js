import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'

class HomeInicio extends React.Component {
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }
  state = {
    count: 0,
  };
  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  /*
  <Button
    title="Go to Details"
    onPress={() => {
      this.props.navigation.navigate('Details', {
        itemId: 86,
        otherParam: 'anything you want here',
      });
    }}
  />
  */
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground source={require('../../assets/images/bgHome.jpg')} style={{width: '100%', height: '100%'}}>
          {/*<View style={{display: "none", position: 'absolute', top: 0, right: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Cambiar perfil</Text>
    </View>*/}
          <View style={{flex: 1, alignItems: "center", justifyContent: "center", width: "100%", height: 40, marginTop: 40 }}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={{width:100, height: 40, flex: 1}} resizeMode="contain" 
            />
          </View>
          <View style={{flex: 1, alignItems: "center", justifyContent: "center", width: "100%", height: 90 }}>
            <Image
              source={require('../../assets/images/logoBig.png')}
              style={{width:200, height: 90, flex: 1}} resizeMode="contain" 
            />
          </View>
          <View style={{flex: 1, alignItems: "center", justifyContent: "center", width: "100%", height: 90, paddingLeft: 30, paddingRight: 30, textAlign: "center" }}>
            <Text style={{ fontWeight: "300", textAlign: "center", fontSize: 18 }}>La manera más económica y segura de cambiar tu dinero.</Text>
          </View>
          <View style={{flex: 1, alignItems: "center", justifyContent: "center", width: "100%", height: 90, paddingLeft: 30, paddingRight: 30, textAlign: "center" }}>
            <Text>Compra: 3.253 | Venta: 3.291</Text>
          </View>
          <View style={{
            backgroundColor: "#2db4ff",
            color: "#ffffff",
            height: 60,
            alignItems: "center", justifyContent: "center"
          }}>
            <Text style={{color: "#fff", fontWeight: "bold", fontSize: 16}}>Empieza tu operacion</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default HomeInicio