import React from 'react'
import { FONTS, MARGIN, PADDINGS, COLORS, RADIUS } from '../../constants/Constants'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');
import { RFValue } from "react-native-responsive-fontsize";


const styles = StyleSheet.create({
    container: {
        // flex:1,
        height: "100%",
        width: "100%",
        backgroundColor: COLORS.white,
        paddingHorizontal: PADDINGS.mdPadding,
        paddingTop: '5%',
        alignItems: 'center',
        paddingBottom: '1%'
    }, arrowButtonStyle: {
        elevation: RFValue(10)
    }, viewBlueStyle: {
        backgroundColor: COLORS.blue,
        width: RFValue(130),
        height: RFValue(130),
        borderRadius: RFValue(65)
        , alignItems: 'center',
        justifyContent: 'center'
    }, textHeaderStyle: {
        marginLeft: RFValue(-20)
    }, viewImage: {
        marginTop: '10%',
        width: RFValue(250),
        height: RFValue(250),
        alignItems: 'center',
        justifyContent: 'center'
    }, imageStyle: {
        width: RFValue(250),
        height: RFValue(250)
    }, viewForTextStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '8%'
    }, textStyle: {
        color: COLORS.darkGray,
        fontSize: FONTS.h5,
        fontFamily: "Amaranth-Regular",
        textAlign: 'center'
    }, buttonMargin: {
        marginTop: '15%',
        width:'100%'
    }, codeFieldRoot: {
        marginTop: '15%',
    }, viewCodeFieldStyle: {
        alignItems: 'center',
        justifyContent: 'center'

    }, cell: {
        width: RFValue(50),
        height: RFValue(50),
        borderWidth: RFValue(2),
        borderRadius: RADIUS.xsRadius,
        lineHeight: RFValue(45),
        borderColor: COLORS.gray,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: FONTS.h2,
        marginHorizontal: MARGIN.smMargin,
    }, focusCell: {
        borderColor: COLORS.blue,
    }, scrollViewStyle: {
        backgroundColor: COLORS.white
    }


})
export default styles;