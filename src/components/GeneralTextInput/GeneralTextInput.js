import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  COLORS,
  FONTS,
  ICONS,
  PADDINGS,
  RADIUS,
} from '../../constants/Constants';

function GeneralTextInput(props) {
  const {style, password, iconName, line, placeholder, ...rest} = props;
  return (
    <View style={line ? null : styles.textIconWrapper}>
      {line ? <Text>{placeholder}</Text> : null}
      <TextInput
        {...rest}
        placeholder={!line ? placeholder : null}
        secureTextEntry={password}
        style={[line ? styles.inputLine : styles.textInputStyle, style]}
      />
      {line ? null : <Icon name={iconName} size={ICONS.smIcon} />}
    </View>
  );
}
const styles = StyleSheet.create({
  textIconWrapper: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: RADIUS.xsRadius,
    padding: PADDINGS.xsPadding,
  },
  textInputStyle: {
    flex: 1,
    fontSize: FONTS.h5,
    borderColor: COLORS.darkGray,
    color: COLORS.black,
  },
  inputLine: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.darkGray,
  },
});
export default GeneralTextInput;
