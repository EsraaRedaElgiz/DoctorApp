import React from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, ICONS, FONTS } from '../../constants/Constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { height, width } = Dimensions.get('window');
import ReusableArrowButton from '../../components/AppRightIcon/AppRightIcon';

function HeaderArrowAndWord(props) {
    const { text, textcolor, arrowbuttonstyle } = props
    return (
        <View style={styles.container}>

            <ReusableArrowButton style={arrowbuttonstyle} />
            <View>
                <Text style={[styles.textstyle, { color: textcolor }]}>{text}</Text>
            </View>
            <View></View>


        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        width: '96%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }, textstyle: {
        fontSize: FONTS.h3,
        fontFamily: "Amaranth-Regular"
    }

})
export default HeaderArrowAndWord;