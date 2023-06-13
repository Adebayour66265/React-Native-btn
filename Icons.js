import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
    Button,
    Pressable,
    StyleSheet,
    Switch,
    Text,
    useWindowDimensions,
    View,
} from "react-native";


import { useRef, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const IconsGrid = () => {
    const icon = [
        { name: 'home', },
        { name: 'home', },
        { name: 'home', },
        { name: 'home', }
    ];
}

return (

    <View style={styles.contentContainer}>
        {icon.map((icon, index) => (
            <Entypo key={index} name={icon.name} size={50} style={styles.icon}
            />
        ))}
    </View>
)
export default IconsGrid