import { StyleSheet, Text, View, ActivityIndicator, Image, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

const Loading = ({ navigation }) => {

    const [loader, setLoder] = useState(true)

    useEffect(() => {
      if (loader) {
        setTimeout(() => {
          setLoder(false);
          navigation.navigate('Home')
        }, 3000);
      }
    }, []);

    return (
        <View style={styles.mainContainer} >
            {
                loader ? <ActivityIndicator size="large" color="#0000ff" /> : (
                    <View>
                        <View style={styles.subContainer}>
                            <Image style={styles.imageStyle} source={require('../../assets/images/mainImage.png')} />
                            <Text style={styles.textStyle} >
                                Edunative
                            </Text>
                        </View>
                        <View style={styles.btnContainer} >
                            <Button onPress={()=>navigation.navigate('Home')} style={styles.btnStyle} title='Back To App' />
                        </View>
                    </View>
                )
            }
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageStyle: {
        width: 160,
        height: 160
    },
    subContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 5,
        borderColor: "grey",
        height: 260,
        width: 260,
        borderRadius: 200
    },
    textStyle: {
        fontFamily: "arial",
        fontSize: 30,
        color: "#555"
    },
    btnContainer: {
        paddingTop: 20,
        marginTop:40,
        bottom: 0
    },
})