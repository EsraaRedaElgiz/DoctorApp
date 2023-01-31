import {StyleSheet, Dimensions} from 'react-native';
import {
  COLORS,
  FONTS,
  RADIUS,
  PADDINGS,
  MARGIN,
} from '../../constants/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.blue,
        
    }
    , topViewStyle: {
       //minHeight: height * .2,
       marginBottom:height*.05
       
    },
    buttonIconStyle: {
        width: RFValue(30),
        height: RFValue(30),
        borderRadius: RFValue(15),
        backgroundColor: COLORS.white,
        marginLeft: "5%",
        marginTop: height*.04,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewHeaderStyle: {
        width: '100%',
        alignItems: 'center',
        justifyContent: "center",
    }
    , firstTextHeaderStyle: {
        color: COLORS.white,
        fontSize: FONTS.h2,
        fontFamily: "Amaranth-Regular"
    }, secondTextHeaderStyle: {
        color: COLORS.white,
        fontSize: FONTS.h4,
        fontFamily: "Amaranth-Regular"
    }, viewAfterHeaderStyle: {
       // minHeight: height * .8,
        flexGrow:1,
        backgroundColor: COLORS.white,
        borderTopRightRadius: RFValue(100),
        paddingHorizontal: PADDINGS.xlPadding,

    }, iconStyle: {
       // marginTop:height*.02 ,

    },
    firsttextinputmargin: {
        marginTop: height*.08
    }, eachtextinputmargin: {
        marginTop: height*.021
    },
    viewForfirstTextAfterTextinputs: {
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: "center",
        marginTop: height*.03
    },viewForSecondTextAfterTextinputs: {
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: height*.03
    },
    textAfterTextinputsStyle: {
        color: COLORS.darkGray,
        fontSize: FONTS.h5,
        fontFamily: "Amaranth-Regular",


    }, viewForLastTextStyle: {
        width: "100%",
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:height*.02

    }, bluetextstyle: {
        color: COLORS.blue,
        fontFamily: "Amaranth-Regular"
    }


})
export default styles;
