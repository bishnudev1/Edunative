import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react'

const Home = ({ navigation }) => {

  return (
    <View style={styles.mainContainer} >
      <View>
        <Image style={styles.imgStyle} source={require("../../assets/images/Home.jpg")} />
      </View>
      <View style={styles.subContainer} >
        <Text style={[{ fontSize: 25 }, { fontFamily: "serif" }, { paddingBottom: 10 }, { color: "blue" }]} >WELCOME TO</Text>
        <Text style={[{ fontSize: 25 }, { fontFamily: "serif" }, { paddingBottom: 10 }]} >EDUNATIVE EDUCATION</Text>
        <Text style={[{ fontFamily: "cursive" }, { color: "#999" }, { paddingTop: 10 }, { fontSize: 15 }]} >
          Hello, it's glad to see you chose our education app. Select your preferred course and start learning from today. This app is still in beta, so there maybe some bug. Don't forget to contact us if you feel any problem. Keep hunting.
        </Text>
      </View>
      <View style={styles.iconContainer} >
        <TouchableOpacity onPress={() => navigation.navigate('Courses')} style={styles.subIconContainer} >
          <Image style={styles.iconStyles} source={require("../../assets/images/AllCourses.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Facts')} style={styles.subIconContainer} >
          <Image style={styles.iconStyles} source={require("../../assets/images/AllMembers.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')} style={styles.subIconContainer} >
          <Image style={styles.iconStyles} source={require("../../assets/images/ContactUs.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AboutUs')} style={styles.subIconContainer} >
          <Image style={styles.iconStyles} source={require("../../assets/images/AboutUs.png")} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "20%",
  },
  imgStyle: {
    height: 220,
    flex: 1,
    width: 340,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey"
  },
  subContainer: {
    alignItems: "center",
    padding: 20
  },
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
    top: 80,
  },
  iconStyles: {
    width: 32,
    height: 32,
    padding: 24
  },
  subIconContainer: {
    paddingHorizontal: 20
  }
});