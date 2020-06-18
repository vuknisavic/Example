import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import ReadingComponent from "../components/ReadingComponent"

const image = { uri: "https://i.ibb.co/RP8gjBW/OqH4GUk.jpg" };



export const ReadingScreen = () => {
  return (
            
    
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.title}>Reading</Text>
      <ReadingComponent/>
    </ImageBackground>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 700,
    width: 380
  },

  title: {
    fontSize:32,
    fontWeight: "bold",
    color:"#FFF",
    marginTop: 100,
    marginLeft: 140,
    fontFamily:"Didot-Italic",
  },

});
