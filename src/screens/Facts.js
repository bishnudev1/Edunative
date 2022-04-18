import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';


const Facts = () => {

  const allFacts = [
    {
      id: 1,
      name: "Inventor of React",
      image: require("../../assets/images/facts_images/react.jpg"),
      desc: "Did you know ? React is a framework of Javascript which was invented by Facebook in 29th May 2013",
      source: "Wikipedia"
    },
    {
      id: 2,
      name: "Alexa or Detective ?",
      image: require("../../assets/images/facts_images/alexa.jpg"),
      desc: "Alexa is always listening to your conversations. SO turn it off when not to use for your better security",
      source: "Google"
    },
    {
      id: 3,
      name: "Female lion-The hunters",
      image: "https://lionalert.org/wp-content/uploads/2020/01/Female-Lion.jpg",
      desc: "It's the female lions who do the bulk of the work when it comes to feeding their families. Lionesses, not male lions",
      source: "Wikipedia"
    }, {
      id: 4,
      name: "Cats with superpower",
      image: "https://external-preview.redd.it/DA06h2Py7JYhtQytSmiqbwwVQ-mry3l4ZFYXlSKEh1c.jpg?auto=webp&s=1a6f913a1d26da3bfe27424d1ef182abe3ff9450",
      desc: "Some animals can predict death. Oscar the Cat is famous for his hospice work. Oscar has an uncanny ability",
      source: "Wikipedia"
    }, {
      id: 5,
      name: "Kangaroos can't fart",
      image: "https://cdn.vox-cdn.com/thumbor/TNtdNPS-5y7A5_nlmwlh3TSlMK8=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/47597665/185032680.0.jpg",
      desc: "These beasts were once the mystery of the animal kingdom -- thought to produce low-methane, environmentally friendly toots",
      source: "Google"
    }, {
      id: 6,
      name: "Dark chocolate benefits",
      image: "https://fitwithfoodnet.files.wordpress.com/2020/07/dark-chocolate.jpg",
      desc: "For improving bad cholesterol, lowering blood pressure, helping to reduce stress. Dark chocolates are too good",
      source: "Wikipedia"
    },
    {
      id: 7,
      name: "Fruits = no body fat",
      image: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/watermelon-1.jpg?quality=82&strip=1&resize=640%2C360",
      desc: "Not all types of fruit but water based fruit like Watermelon, Graphs can do a better job. So start eating fruits from today",
      source: "Google"
    },
    {
      id: 8,
      name: "Why Crackers have holes ?",
      image: "https://media.distractify.com/brand-img/d8eD3pDhK/0x0/_why-do-crackers-have-holes-in-them-graham-1595275493466.jpg",
      desc: "During the baking process, if the crackers have holes in them, it prevents air bubbles from ruining the product",
      source: "Wikipedia"
    },
    {
      id: 9,
      name: "Ketchup = medicine ?",
      image: "https://images.healthshots.com/healthshots/en/uploads/2021/09/06153546/ketchup-1-1600x900.jpg",
      desc: "Back in the early 1800s, people thought tomatoes had medicinal qualities. So they used it as a medicine",
      source: "Wikipedia"
    },
    {
      id: 10,
      name: "The most expensive pizza",
      image: "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg",
      desc: "That’s because it takes 72 hours to make, and it can only be made in your home by 3 Italian chefs. It costs $12,000 dollars",
      source: "Wikipedia"
    },
    {
      id: 11,
      name: "Fox or Red Panda ?",
      image: "https://blog.mozilla.org/performance/files/2021/10/red_panda_sleeping-1400x770.jpg",
      desc: "The English word for the red panda is Firefox. This means that the Logo is actually a red panda, not a fox",
      source: "Wikipedia"
    },
    {
      id: 12,
      name: "First Computer Mouse",
      image: "https://miro.medium.com/max/1200/1*01tRFr56GISV-sZgNBubbA.jpeg",
      desc: "Back in 1964, Doug Engelbart invented the first-ever computer mouse! Back then, it was made out of wood",
      source: "Google"
    },
     {
      id: 13,
      name: "PS3 under Government ?",
      image: "https://cdn.pocket-lint.com/r/s/1200x/assets/images/73106-games-review-sony-ps3-slim-image10-uam7djlpai.jpg",
      desc: "In 2010, the United States Air Force used 1,760 PlayStation 3 consoles for the Department of Defense",
      source: "Wikipedia"
    },
    {
      id: 14,
      name: "Google-A Spell Checker",
      image: "https://r1.community.samsung.com/t5/image/serverpage/image-id/4346367i79B975ECA60D7FAD/image-size/large?v=v2&px=999",
      desc: "Most everyone, anyway! 97% of people type in words to Google just to see if they spelled it right",
      source: "Wikipedia"
    },
    {
      id: 15,
      name: "Gamer Surgeon vs Normal",
      image: "https://www.thefactsite.com/wp-content/uploads/2019/12/surgeon-skills.webp",
      desc: "Oddly enough, surgeons that grew up playing video games more than 3 hours per week make 37% fewer errors!",
      source: "Google"
    },
  ]

  return (
    <FlatList
      keyExtractor={(index) => {
        return index.id
      }}
      data={allFacts}
      renderItem={({ item }) => {
        return (
          <View style={styles.mainContainer} >
            <View style={styles.subMainContainer} >
              <View style={styles.subTextMain} >
                <LinearGradient style={styles.LinearGStyles} colors={['rgb(255,127,56)', 'transparent']}>
                  <Text style={styles.headText} >{item.id}</Text>
                  <Text style={styles.mainText} >{item.name}</Text>
                  <View style={{ margin: 10 }} >
                    <Image style={styles.imgStyle} source={{ uri: item.image }} />
                  </View>
                </LinearGradient>
                <View style={styles.descStyle} >
                  <Text style={styles.descTextStyle} >{item.desc}</Text>
                  <Text style={styles.creditText} >Source : {item.source}</Text>
                </View>
              </View>
            </View>
          </View>
        )
      }}
    />
  )
}

export default Facts

const styles = StyleSheet.create({
  imgStyle: {
    width: 300,
    height: 200,
    borderRadius: 40
  },
  LinearGStyles: {
    borderRadius: 40,
    width: 340,
    justifyContent: "center",
    alignItems: "center",
  },
  headText: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 100,
    height: 35,
    width: 37,
    textAlign: "center",
    fontSize: 25,
    margin: 10,
    color: "white"
  },
  mainText: {
    fontSize: 20,
    fontFamily: "cursive"
  },
  subMainContainer: {
    borderWidth: 2,
    borderRadius: 40,
    borderColor: "black",
    height: 430,
    width: 340,
  },
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "20%",
    paddingBottom: 30
  },
  subTextMain: {
    justifyContent: "center",
    alignItems: "center"
  },
  descStyle: {
    paddingTop: 5,
    textAlign: "center",
    borderWidth: 1,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: 350,
    height: 145,
    backgroundColor: "lightgreen",
    borderColor: "green"
  },
  descTextStyle: {
    fontSize: 20,
    color: "#666",
    fontFamily: `Times New Roman`,
    letterSpacing:1
  },
  creditText: {
    margin: 10,
    fontFamily:"Arial, Helvetica, sans-serif"
  }
})