import React from 'react';
import {Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS, RADIUS} from '../../constants/Constants';

function Appbutton(props) {
  const {
    buttontext,
    changebuttonstyle,
    changetextstyle,
    isloading,
    disabled,
    ...rest
  } = props;

  return (
    <TouchableOpacity
      {...rest}
      disabled={isloading}
      style={[
        styles.buttonstyle,
        changebuttonstyle,
        disabled ? styles.disabledbuttonstyle : null,
      ]}>
      {isloading ? (
        <ActivityIndicator size={FONTS.h2} color={COLORS.white} />
      ) : (
        <Text style={[styles.textstyle, changetextstyle]}>{buttontext}</Text>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonstyle: {
    backgroundColor: COLORS.blue,
    borderRadius: RADIUS.xsRadius,
    borderWidth: RFValue(1),
    borderColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    height: RFValue(50),
    width: '100%',
  },
  textstyle: {
    color: COLORS.white,
    fontSize: FONTS.h4,
    fontFamily: 'Amaranth-Regular',
  },
  disabledbuttonstyle: {
    opacity: 0.8,
  },
});
export default Appbutton;
