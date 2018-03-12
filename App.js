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
          <Text> for verification</Text>{"\n"}{"\n"}
          <Text style = {{ flex: 1, marginBottom: 10 }}>
          </Text>
        </Text>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginRight: 290, marginLeft: 30 }}/>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginRight: 290, marginLeft: 30 }}/>
        <Text style={styles.txt2}>
            <Text>Not Recieved ? </Text>
            <Text style={{color: '#0277bd'}}>Resend OTP</Text>
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
    // flex: 1,
    paddingTop: 40, 
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 20,
    fontWeight: "100",
    fontFamily: 'sans-serif-thin'
  },
  txt2: {
    paddingBottom: 200,
    paddingLeft: 70,
    fontSize: 16,
    fontWeight: "100",
    fontFamily: 'sans-serif-thin',
  }
});
