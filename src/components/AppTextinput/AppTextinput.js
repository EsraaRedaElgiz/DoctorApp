import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS, RADIUS} from '../../constants/Constants';

function Reusabletextinput(props) {
  const {style, placeholder, ...rest} = props;
  return (
    <TextInput
      {...rest}
      style={[styles.text_input_style, style]}
      label={
        <Text style={styles.lebelanddplaceholderstyle}>{placeholder}</Text>
      }
      mode={'outlined'}
      activeOutlineColor={COLORS.gray}
      outlineStyle={styles.outlinestyle}
    />
  );
}
const styles = StyleSheet.create({
  text_input_style: {
    fontSize: FONTS.h6,
    backgroundColor: COLORS.white,
    height: RFValue(45),
    fontFamily: 'Amaranth',
    justifyContent: 'center',
  },
  outlinestyle: {
    borderRadius: RADIUS.xsRadius,
    borderColor: COLORS.gray,
  },
  lebelanddplaceholderstyle: {
    color: COLORS.black,
    backgroundColor: COLORS.lightGray,
    fontFamily: 'Amaranth-Regular',
  },
});
export default Reusabletextinput;
