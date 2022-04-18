import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';

const Contact = ({navigation}) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")

  const getData = () => {
    if(name !== "" && email !== ""){
      Alert.alert(`Thank you ${name} for submitting your feedback to us`)
      navigation.navigate('Home',{myName:`${name}`})
    }
    else{
        Alert.alert(`Failed to submit feedback`)
    }
  }

  return (
    <View style={styles.mainContainer} >
      <View style={styles.headContainer} >
        <Text style={[{ fontSize: 25 },{marginBottom:10},{fontWeight:700}]} >Feedback Form</Text>
        <Text style={[{ fontSize: 17 }]} >Your feedback is meant all to us</Text>
      </View>
      <View style={styles.authField} >
        <Text style={[{ fontWeight: 600 }, { fontFamily: "sans-serif" },{paddingHorizontal:5}]} >Enter your name...</Text>
        <TextInput style={styles.inputStyle} value={name} autoCapitalize='none' autoCorrect={false} onChangeText={(actualData) => setName(actualData)} />
        <Text style={[{ fontWeight: 600 }, { fontFamily: "sans-serif" },{paddingHorizontal:5}]} >Enter your email...</Text>
        <TextInput style={styles.inputStyle} value={email} autoCapitalize='none' autoCorrect={false} onChangeText={(actualData) => setEmail(actualData)} />
        <Text style={[{ fontWeight: 600 }, { fontFamily: "sans-serif" },{paddingHorizontal:5}]} >Enter your feedback...</Text>
        <TextInput style={[styles.inputStyle,{padding:24}]} value={feedback} autoCapitalize='none' autoCorrect={false} onChangeText={(actualData) => setFeedback(actualData)} />
      </View>
      <TouchableOpacity
        style={[styles.btnStyle, { backgroundColor:"#4630EB"}]}
        onPress={() => getData()} >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btnStyle: {
    textAlign: "center",
    fontWeight: 800,
    padding: 5,
    width:"100%"
  },
  headContainer: {
    marginTop:40,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  mainContainer: {
    padding: 50,
    // borderWidth:1,
    // width:350,
    // position:"absolute",
    // left:"5%",
    // top:160
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  authField: {
    paddingBottom: 30,
    width:"100%"
  },
  inputStyle: {
    borderWidth:1,
    borderColor: "grey",
    marginVertical:10,
    height:25
  },
  checkText: {
    position:"relative",
    bottom:18,
    left:20
  }
})

export default Contact