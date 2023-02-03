import { StyleSheet } from 'react-native'
import { MARGIN, COLORS, PADDINGS, FONTS, RADIUS } from '../../../constants/Constants'
import { RFValue } from 'react-native-responsive-fontsize';
const styles = StyleSheet.create({
    slide: {
        height: '100%',
        width: '100%',
        color: COLORS.white,
        paddingHorizontal: PADDINGS.mdPadding,
        backgroundColor: "#fff",
        alignItems: 'center'
    }, text: {
        color: COLORS.blue,
        fontSize: FONTS.h4,
        fontFamily: "Amaranth-Regular",
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight:'bold'
    }, activeDotStyle: {
        backgroundColor: COLORS.blue,
        width: RFValue(30),
        marginTop:RFValue(-60)
    },dotStyle:{
        marginTop:RFValue(-60),
        backgroundColor:COLORS.gray
    } ,
    nextButtonStyle: {
        backgroundColor: COLORS.blue,
        borderRadius: RADIUS.xsRadius,
        borderWidth: RFValue(1),
        borderColor: COLORS.blue,
        justifyContent: 'center',
        alignItems: 'center',
        height: RFValue(50),
        width: '100%',
    },doneButtonStyle:{
        backgroundColor: COLORS.blue,
        borderRadius: RADIUS.xsRadius,
        borderWidth: RFValue(1),
        borderColor: COLORS.blue,
        justifyContent: 'center',
        alignItems: 'center',
        height: RFValue(50),
        width: '100%',
    },textNextAndDoneStyle: {
        color: COLORS.white,
        fontSize: FONTS.h4,
        fontFamily: 'Amaranth-Regular',
        fontWeight: 'bold'
    }, imageStyle: {
        width: '100%',
        height: '60%',
        resizeMode:'contain'
    }

})
export default styles;