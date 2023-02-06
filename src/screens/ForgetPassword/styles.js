import { FONTS, MARGIN, PADDINGS, COLORS } from '../../constants/Constants'
import { StyleSheet } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        // flex:1,
        height: "100%",
        width: "100%",
        backgroundColor: COLORS.white,
        //paddingHorizontal: PADDINGS.mdPadding,
        //  paddingTop: '5%',
        // alignItems: 'center',
        paddingBottom: '1%'
    }, arrowButtonStyle: {
        elevation: RFValue(3)
    }, viewForScrollviewContainer: {
        paddingHorizontal: PADDINGS.mdPadding,
        paddingTop: '5%',
        alignItems: 'center',
        paddingBottom: '1%'
    }, textHeaderStyle: {
        marginLeft: RFValue(-15)
    }, viewImage: {
        marginTop: '5%'
    }, imageStyle: {
        width: RFValue(250),
        height: RFValue(250),
    }, viewForTextStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '8%'
    }, textStyle: {
        color: COLORS.darkGray,
        fontSize: FONTS.h5,
        fontFamily: "Amaranth-Regular",
        textAlign: 'center'
    }, textInputMargin: {
        marginTop: '15%',
        marginBottom: '10%'
    }, buttonStyle: {
        width: '100%',
    }, scrollViewStyle: {
        backgroundColor: COLORS.white
    }, buttonContainerStyle: {
        paddingHorizontal: PADDINGS.mdPadding
    }

})
export default styles;