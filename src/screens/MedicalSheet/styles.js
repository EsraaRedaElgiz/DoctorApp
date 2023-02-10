import { StyleSheet, Dimensions } from 'react-native';
import {
  COLORS,
  FONTS,
  RADIUS,
  PADDINGS,
  MARGIN,
} from '../../constants/Constants';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    flexDirection: 'column'

  }, wordHeaderMargin: {
    marginLeft: RFValue(-25)
  },
  topViewStyle: {
    paddingHorizontal: PADDINGS.mdPadding,
    paddingTop: '5%',
    flex: 1,

  }, customButtonIconAndWordMargin: {
    marginBottom: '5%'
  }, viewHeaderStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: '5%'
  }, viewAfterHeaderStyle: {
    backgroundColor: COLORS.white,
    borderTopRightRadius: RFValue(85),
    paddingHorizontal: PADDINGS.mdPadding,
    //flex: 5,
    paddingTop: '15%',
    paddingBottom: '1%'
  }, firstTextInputMargun: {
    marginTop: '1%',
    marginBottom: '1%'
  }, eachTextInputMargin: {
    marginBottom: '1%'
  }, scrollViewStyle: {
    backgroundColor: COLORS.white
  }, buttonMargin: {
    marginTop: '10%'
  }, dropDownMarginBottom: {
    marginBottom: '0%'
  },errorTextColor:{
    color:"#f00"
  }


})
export default styles;
