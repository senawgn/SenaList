import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";

const HeaderCustom = ({ title = "Title", colorCustom = "red" }) => {

    return (


        //   {/* Header */}
        //   {/* <View style={{height: 50, width: Dimensions.get("window").width, backgroundColor:"green"}}> */}

        <View style={style.header}>
            {/* wadah pengaturan dan icon panah kiri */}
            <View style={{flexDirection:"row" , gap:10 , alignItems:"center"}}>
                <Image style={{ height: 20, width: 20 }} source={require('../assets/arrow-left(2).png')} />
                <Text style={{ fontSize: 24, fontWeight: 'condensed', color: "white" }}>{title}</Text>
            </View>

            {/* icon seacrh */}
            <Image source={require('../assets/search.png')} />
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        flexDirection:"row",
        paddingHorizontal:10,
        paddingVertical: 10,
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomWidth: 0.2,
        borderBottomColor:"white"
    }
})

export default HeaderCustom