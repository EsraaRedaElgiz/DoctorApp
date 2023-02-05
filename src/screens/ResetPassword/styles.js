import { FONTS, MARGIN, PADDINGS, COLORS, RADIUS } from '../../constants/Constants'
import { StyleSheet } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        // flex:1,
        height: "100%",
        width: "100%",
        backgroundColor: COLORS.white,
        paddingHorizontal: PADDINGS.mdPadding,
        paddingTop: '5%',
        //  alignItems: 'center'
        paddingBottom: '1%'
    }, arrowButtonStyle: {
        elevation: RFValue(10)
    }, textHeaderStyle: {
        marginLeft: RFValue(-20)
    }, viewForTextStyle: {
        marginTop: '10%',
        marginBottom: '15%'
    }, textStyle: {
        color: COLORS.darkGray,
        fontSize: FONTS.h5,
        fontFamily: "Amaranth-Regular",
        alignSelf: 'flex-start'
    }, firstTextInputMargin: {
        marginBottom: '10%',
    }, secondTextInputMargin: {
        marginBottom: '10%',
    }, viewBetweenLastTextInputAndButton: {
        minHeight: RFValue(50),
        marginBottom: '30%'

    }, scrollViewStyle: {
        backgroundColor: COLORS.white
    }


})
export default styles;