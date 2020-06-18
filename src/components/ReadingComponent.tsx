import React, {Component} from "react";

import {
        View,
        StyleSheet,
        Text,
        FlatList, 
        Dimensions, 
        ImageBackground,
        TouchableOpacity,
        } from "react-native";
import {Surface} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Player from "../screens/Player";



const {width, height} = Dimensions.get("window");


class ReadingComponent extends Component {
    constructor(props: any) {
        super(props);
    }
    
    render() {
        
    let categories = [ 
        {
            name : "Category 1",
            img : require("../Assets/Slika.jpg"),
            screenName : "Player",
        },
        {
            name : "Category 2",
            img : require("../Assets/Slika.jpg"),
        },
        {
            name : "Category 3",
            img : require("../Assets/Slika.jpg"),
        },
        {
            name : "Category 4",
            img : require("../Assets/Slika.jpg"),
        },
        {
            name : "Category 5",
            img : require("../Assets/Slika.jpg"),
        },
        {
            name : "Category 6",
            img : require("../Assets/Slika.jpg"),
        },
        {
            name : "Category 7",
            img : require("../Assets/Slika.jpg"),
        },
        {
            name : "Category 8",
            img : require("../Assets/Slika.jpg"),
        },
        {
            name : "Category 9",
            img : require("../Assets/Slika.jpg"),
        },
        {
            name : "Category 10",
            img : require("../Assets/Slika.jpg"),
        },
    ];
        
        return (
            <View style={styles.container}>
                <FlatList
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    numColumns={categories.length / 5}
                    showsVerticalScrollIndicator={false}
                    renderItem = {({item, index}) => {
                        return (
                        <TouchableOpacity>
                        <Surface style={styles.surface}>
                            <ImageBackground
                            source={item.img} 
                            style={styles.img}
                            blurRadius={0.5}>
                        <Icon name="music" color="#fff" size={22}/>
                        <Text style={styles.name}>{item.name}</Text>
                            </ImageBackground>
                        </Surface>
                        </TouchableOpacity>
                        );
                    }}
                />
            </View>
            
        );    
    }
}

export default ReadingComponent;

const styles = StyleSheet.create({
    container: {
        width:width,
        paddingLeft:15,
        paddingBottom:130,
        marginTop:5
      },
    surface: {
        elevation:15,
        height:220,
        width:160,
        borderRadius:10,
        overflow:"hidden",
        marginRight:25,
        marginTop:25,
        
      },
    img : {
        height : 220,
        width:160,
        borderRadius:0,
        padding: 10
      },
    name : {
        position : "absolute",
        bottom : 10,
        left : 10,
        color : "#fff",
        fontWeight : "bold",
        fontSize : 25,
      }
});