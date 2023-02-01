import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, MARGIN, PADDINGS} from '../../constants/Constants';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  conatiner: {
    padding: PADDINGS.smPadding,
    paddingVertical: PADDINGS.xlPadding,
  },
  inputView: {
    marginBottom: MARGIN.mdMargin,
  },
  modalContainer: {
    width: width * 0.8,
    height: height * 0.21,
    marginTop: height * 0.35,
    borderRadius: RFValue(5),
    elevation: 1,
    alignSelf: 'center',
    padding: PADDINGS.xsPadding,
    backgroundColor: COLORS.lightGray,
  },
  button: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: RFValue(5),
    height: RFValue(30),
    backgroundColor: COLORS.white,
  },
  bloodType: {fontSize: 20, color: COLORS.black},
});

export default styles;
