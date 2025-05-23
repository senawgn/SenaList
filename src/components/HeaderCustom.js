import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";

const HeaderCustom = ({ title = "Title", colorCustom = "red" }) => {

    return (


        //   {/* Header */}
        //   {/* <View style={{height: 50, width: Dimensions.get("window").width, backgroundColor:"green"}}> */}

        <View style={style.header}>
            {/* wadah pengaturan dan icon panah kiri */}
            <View style={{flexDirection:"row" , gap:10 , alignItems:"center"}}>
               <TouchableOpacity>
                    <Image style={{ height: 20, width: 20 }} source={require('../assets/arrow-left(2).png')} />
               </TouchableOpacity>
                
                <Text style={{ fontSize: 24, fontWeight: 'condensed', color: "white" }}>{title}</Text>
            </View>

            {/* icon seacrh */}
            <TouchableOpacity>
                <Image source={require('../assets/search.png')} />
            </TouchableOpacity>
            
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