import { StyleSheet, Dimensions } from 'react-native';
import {
  COLORS,
  FONTS,
  RADIUS,
  PADDINGS,
  MARGIN,
} from '../../constants/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,

  },wordHeaderMargin:{
    marginLeft:RFValue(-25)
  },
  topViewStyle: {
    //minHeight: height * .2,
    paddingHorizontal:PADDINGS.mdPadding,
    paddingTop: height * .04

  },viewHeaderStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: "center",
    paddingVertical:height*.02
  }, viewAfterHeaderStyle: {
     minHeight: height * .735,
    //flexGrow: 1,
    backgroundColor: COLORS.white,
    borderTopRightRadius: RFValue(100),
    paddingHorizontal: PADDINGS.mdPadding,

  }, firsttextinputmargin: {
    marginTop: height * .08
  }, eachTextInputMargin: {
    marginTop: height * .021
  },lastTextInputMargin:{
    marginTop: height * .021,
    marginBottom:height*.04


  }


})
export default styles;
