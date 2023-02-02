import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {PADDINGS} from '../../constants/Constants';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    margin: RFValue(10),
  },
});

export default styles;
