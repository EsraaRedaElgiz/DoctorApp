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
    flex: 1,
    backgroundColor: COLORS.blue,
  },
  topViewStyle: {
    //minHeight: height * .2,
    marginBottom: height * 0.061,
    paddingHorizontal: PADDINGS.mdPadding,
    paddingTop: height * 0.04,
  },
  buttonIconStyle: {
    width: RFValue(30),
    height: RFValue(30),
    borderRadius: RFValue(15),
    backgroundColor: COLORS.white,
    marginLeft: '5%',
    marginTop: height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewHeaderStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstTextHeaderStyle: {
    color: COLORS.white,
    fontSize: FONTS.h3,
    fontFamily: 'Amaranth-Regular',
  },
  secondTextHeaderStyle: {
    color: COLORS.white,
    fontSize: FONTS.h4,
    fontFamily: 'Amaranth-Regular',
  },
  viewAfterHeaderStyle: {
    minHeight: height * 0.7632,
    //flexGrow: 1,
    backgroundColor: COLORS.white,
    borderTopRightRadius: RFValue(100),
    paddingHorizontal: PADDINGS.mdPadding,
  },
  firsttextinputmargin: {
    marginTop: height * 0.08,
  },
  eachtextinputmargin: {
    marginTop: height * 0.021,
  },
  viewForfirstTextAfterTextinputs: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.03,
  },
  viewForSecondTextAfterTextinputs: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.03,
  },
  textAfterTextinputsStyle: {
    color: COLORS.darkGray3,
    fontSize: FONTS.h6,
    fontFamily: 'Amaranth-Regular',
  },
  viewForLastTextStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: height * .0225,
    marginTop: height * 0.0225,
  },
  bluetextstyle: {
    color: COLORS.blue,
    fontSize: FONTS.h6,
    fontFamily: 'Amaranth-Regular',
  },
  viewforheaderstyle: {
    marginBottom: height * 0.01,
  },
});
export default styles;
