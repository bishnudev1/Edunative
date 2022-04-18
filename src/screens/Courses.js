import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Button } from 'react-native'
import React from 'react'

const Courses = () => {

  const courseList = [
    {
      id: 1,
      name: "Javascript For Beginners",
      image: require("../../assets/images/course_images/javascript.png"),
      desc: "The most essential web language Javascript. From basic syntax to object oriented, you will learn everything in depth in this course.",
      link: "https://www.youtube.com/watch?v=KGkiIBTq0y0"
    },
    {
      id: 2,
      name: "GUI With Python",
      image: require("../../assets/images/course_images/python.png"),
      desc: "With Python and TKinter module we can gurrentee you to make awesome GUI based software easily, you will everything in depth in this course.",
      link: "https://www.youtube.com/watch?v=YXPyB4XeYLA"
    },
    {
      id: 3,
      name: "Photoshop Mastery Course",
      image: require("../../assets/images/course_images/photoshop.png"),
      desc: "In this course you will learn Adobe Photoshop completely in free of cost. Enroll now to make awesome illustration and graphics easily.",
      link: "https://www.youtube.com/watch?v=IyR_uYsRdPs"
    },
  ]

  return (
    <View style={{ textAlign: "center", top: "5%" }} >
      <Text style={styles.headText} >All Courses</Text>
      <FlatList style={styles.FlatContainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={(index) => {
          return index.id
        }}
        data={courseList}
        renderItem={({ item }) => {
          return (
            <View style={styles.mainContainer} >
              <View style={styles.subHeadContainer} >
                <View style={{ textAlign: "center" }} >
                  <Text style={styles.courseText} >{item.name}</Text>
                  <View style={styles.imgContainer} >
                    <Image style={styles.imgStyle} source={{ uri: item.image }} />
                  </View>
                  <View style={{ textAlign: "center", paddingVertical: 10 }}>
                    <Text style={styles.descText} >
                      {item.desc}
                    </Text>
                    <br></br>
                    <Button style={styles.btnStyle} title='ENROLL NOW' onPress={()=>{window.location.href=item.link}} />
                    <Text style={{ paddingTop: 8, fontSize: 19, fontFamily: "cursive", color: "#666" }} >Certification Available</Text>
                  </View>
                </View>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

export default Courses

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: "20%",
    paddingBottom: 30
  },
  subHeadContainer: {
    borderWidth: 1,
    borderColor: "Grey",
    height: 430,
    width: 280,
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    width: 180,
    height: 180,
    // borderRadius:70
  },
  headText: {
    fontSize: 27,
    fontFamily: "Georgia, serif",
    height: 80
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12
  },
  courseText: {
    fontSize: 20,
    fontWeight: 600,

  },
  descText: {
    fontSize: 16,
    color: "#999"
  },
  btnStyle: {
    backgroundColor: "skyblue",
    padding: 10,
    fontFamily: "sans"
  },
})