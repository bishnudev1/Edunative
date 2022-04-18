import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const AboutUs = () => {
  return (
    <View style={styles.mainContainer} >
      <View style={styles.headTextContainer} >
        <Text style={[styles.mainText,{fontWeight:700}]} >Developers</Text>
      </View>
      <View style={styles.subMainContainer} >
        <Image style={styles.mainImage} source={require('../../assets/images/Profile.jpg')} />
      <View style={styles.informStyle} >
        <Text style={styles.nameText} >Bishnudev Khutia</Text>
        <Text style={styles.subNameText} >Fullstack Developer</Text>
      </View>
      <View style={styles.socialIcons} >
        <TouchableOpacity onPress={()=>{window.location.href="https://www.facebook.com/bishnudev.khutia.90"}} style={styles.iconContainer} >
          <Image style={styles.iconsStyles} source={require("../../assets/images/facebook.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{window.location.href="https://github.com/bishnudev1"}}  style={styles.iconContainer} >
          <Image style={styles.iconsStyles} source={require("../../assets/images/github.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} >
          <Image style={styles.iconsStyles} source={require("../../assets/images/linkedin.png")} />
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default AboutUs

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subMainContainer: {
    marginBottom: 15,
    borderWidth:6,
    borderColor:"pink",
    borderRadius:30,
    width:290,
    height:380,
    justifyContent: "center",
    alignItems: "center",
  },
  informStyle: {
    justifyContent: "center",
    alignItems: "center"
  },
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom:10
  },
  headTextContainer: {
    position: "absolute",
    top: "10%",
    textAlign: "center"
  },
  mainText: {
    fontSize: 27,
    fontFamily: "Georgia, serif",
  },
  nameText: {
    fontSize: 20,
    color: "#444",
    paddingBottom:10
  },
  subNameText: {
    fontSize: 15,
    color: "#999",
    paddingBottom:10
  },
  iconsStyles: {
    width:32,
    height:32,
  },
  socialIcons: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding:10
  },
  iconContainer: {
    paddingHorizontal:8
  }
})