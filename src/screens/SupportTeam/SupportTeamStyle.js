import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  COLORS,
  FONTS,
  MARGIN,
  PADDINGS,
  RADIUS,
} from '../../constants/Constants';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  ScrollViewStyle: {
    padding: PADDINGS.smPadding,
    paddingVertical: PADDINGS.xlPadding,
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    justifyContent: 'space-around',
  },
  textInputStyle: {
    paddingHorizontal: PADDINGS.smPadding,
    paddingBottom: RFValue(150),
    borderRadius: RADIUS.smRadius,
    borderWidth: 1,
    borderColor: COLORS.gray,
    fontSize: FONTS.h6,
    color: COLORS.darkGray,
    marginBottom: height * 0.1,
  },
  linesView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: MARGIN.xlMargin,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: COLORS.gray,
  },
  callText: {
    fontSize: FONTS.h5,
    fontWeight: 'bold',
    color: COLORS.gray,
    marginHorizontal: RFValue(5),
  },
  callView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: RFValue(5),
    marginHorizontal: '5%',
    backgroundColor: COLORS.lightGray2,
    elevation: RFValue(3),
  },
  imageIcon: {
    width: RFValue(60),
    height: RFValue(60),
  },
  button: {
    margin: PADDINGS.smPadding,
  },
});

export default styles;
