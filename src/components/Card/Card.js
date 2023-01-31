import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, PADDINGS, RADIUS} from '../../constants/Constants';

function Card(props) {
  const {children} = props;
  return <View style={styles.container}>{children}</View>;
}
const styles = StyleSheet.create({
  container: {
    elevation: 2,
    backgroundColor: '#fff',
    borderRadius: RADIUS.smRadius,
    padding: PADDINGS.smPadding,
  },
});

export default Card;
