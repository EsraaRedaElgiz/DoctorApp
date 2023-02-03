import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS, MARGIN, PADDINGS} from '../../constants/Constants';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: PADDINGS.smPadding,
  },
  title: {
    fontSize: FONTS.h4,
    color: COLORS.darkGray,
    fontWeight: 'bold',
  },
  diagnosisView: {
    marginVertical: MARGIN.mdMargin,
  },
  diagnosisText: {
    fontSize: FONTS.h6,
    color: COLORS.darkGray,
    textAlign: 'justify',
  },
  head: {
    height: RFValue(40),
    backgroundColor: '#f1f8ff',
  },
  wrapper: {
    flexDirection: 'row',
  },
  tableTitle: {
    flex: 1,
    backgroundColor: '#f6f8fa',
  },
  row: {
    height: RFValue(28),
  },
  text: {
    textAlign: 'center',
    fontSize: FONTS.h6,
    color: COLORS.darkGray,
  },
  analysis: {
    height: height * 0.06,
    backgroundColor: COLORS.lightGray,
    elevation: 1,
    marginTop: MARGIN.mdMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFValue(10),
    borderRadius: RFValue(5),
  },
  openButton: {
    width: 70,
    height: 40,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    borderRadius: RFValue(4),
  },
  openText: {
    fontSize: FONTS.h6,
    fontWeight: 'bold',
  },
  analysisText: {
    fontSize: FONTS.h6,
    fontWeight: 'bold',
    color: COLORS.darkGray2,
  },
});

export default styles;
