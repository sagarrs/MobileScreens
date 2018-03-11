import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Img1 = 'https://i.ytimg.com/vi/9D1vO-7tfZg/maxresdefault.jpg'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyText: 'Account Information'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Verify Phone Number</Text>
        <Image style={styles.image} source={{uri: Img1}}/>
        <Text style={styles.txt}>
          <Text>An OTP has been sent by sms to </Text>
          <Text style={{fontWeight: "bold"}}>+91 8892275735</Text>
          <Text> for verification</Text>
        </Text>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    color: '#0277bd',
    fontSize: 25,
    padding: 30
  },
  image: {
    flex: 1,		
    width: 180,		
    marginLeft: 80,
    // marginBottom: 300
  },
  txt: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 150, 
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 20,
    fontWeight: "100",
    fontFamily: 'sans-serif-thin'
  }
});
