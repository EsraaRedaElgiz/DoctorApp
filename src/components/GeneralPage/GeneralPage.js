import React from 'react';
import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {COLORS, PADDINGS} from '../../constants/Constants';

function GeneralPage(props) {
  const {children, style} = props;
  return (
    <View style={[styles.container, style]}>
      <StatusBar backgroundColor={COLORS.blue} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollStyle}>
        {children}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollStyle: {
    flex: 1,
  },
});
export default GeneralPage;
