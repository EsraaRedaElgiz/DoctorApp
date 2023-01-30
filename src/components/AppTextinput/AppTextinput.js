import React from "react";
import { View, Text } from 'react-native'
import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS, FONTS, RADIUS } from '../../constants/Constants'

function Reusabletextinput(props) {
    const { style, placeholder, ...rest } = props
    return (

        <View style={styles.container}>

            <TextInput {...rest}
                style={[styles.text_input_style, style]}
                label={<Text style={styles.lebelanddplaceholderstyle}>{placeholder}</Text>}
                mode={'outlined'}
                activeOutlineColor={COLORS.gray}
                outlineStyle={styles.outlinestyle}

            />


        </View>



    )

}
const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    text_input_style: {
        fontSize: FONTS.h4,
        backgroundColor: COLORS.white,
        height: RFValue(53),
        width: '100%',
        fontFamily: "Amaranth-Regular",
    }, outlinestyle: {
        borderRadius: RADIUS.xsRadius,
        borderColor: COLORS.gray
    }, lebelanddplaceholderstyle: {
        color: COLORS.darkGray,
        fontFamily: "Amaranth-Regular"
    }

})
export default Reusabletextinput;