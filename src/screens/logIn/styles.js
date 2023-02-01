import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, RADIUS, PADDINGS, MARGIN } from "../../constants/Constants";
import { RFValue } from 'react-native-responsive-fontsize'
const { height, width } = Dimensions.get('window');



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.blue,
    }
    , topViewStyle: {
        //minHeight: height * .2,
        paddingHorizontal:PADDINGS.mdPadding,
        marginBottom: height * .101,
        paddingTop:height * .04
    },
    custombuttonIconStyle: {
        marginBottom: height * .04,
    },
    viewHeaderStyle: {
        width: '100%',
        alignItems: 'center',
        justifyContent: "center",
    }
    , firstTextHeaderStyle: {
        color: COLORS.white,
        fontSize: FONTS.h3,
        fontFamily: "Amaranth-Regular"
    }, secondTextHeaderStyle: {
        color: COLORS.white,
        fontSize: FONTS.h4,
        fontFamily: "Amaranth-Regular"
    }, viewAfterHeaderStyle: {
         minHeight: height * .6832,
        //flexGrow: 1,
        backgroundColor: COLORS.white,
        borderTopRightRadius: RFValue(100),
        paddingHorizontal: PADDINGS.mdPadding

    }, iconStyle: {
        // marginTop:height*.02 ,

    },
    firsttextinputmargin: {
        marginTop: height * .08
    }, eachtextinputmargin: {
        marginTop: height * .021
    },
    viewForfirstTextAfterTextinputs: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginVertical: height * .03
    },
    textAfterTextinputsStyle: {
        color: COLORS.darkGray2,
        fontSize: FONTS.h6,
        fontFamily: "Amaranth-Regular",


    }, viewForLastTextStyle: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
       // marginVertical: height * .02,
        marginTop:height*.02

    }, bluetextstyle: {
        color: COLORS.blue,
        fontFamily: "Amaranth-Regular"
    }, viewforcheckboxandwordstyle: {
        flexDirection: 'row',
        alignItems: 'center'
    }, viewfortwolinesandwordstyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

    }, viewfortwoboxesstyle: {
        flexDirection: 'row',
        width: '100%', alignItems: 'center',
        justifyContent: 'center',
        marginVertical: height * .0535
    }, viewforheaderstyle: {
        marginBottom: height * .01
    }, lineviewstyle: {
        width: '45%',
        height: RFValue(2),
        backgroundColor: COLORS.gray
    }, twoSquaresStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: RFValue(50),
        height: RFValue(50),
        borderRadius: RFValue(5),
        marginHorizontal: '5%',
        backgroundColor: COLORS.lightGray2,
        elevation:RFValue(3) 
    },imagestyle:{
        width:RFValue(35),
        height:RFValue(35)
    },orWordStyle:{
        color: COLORS.darkGray2
    }


})
export default styles;