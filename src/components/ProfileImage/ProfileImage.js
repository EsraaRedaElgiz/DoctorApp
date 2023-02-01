import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/AntDesign';
import {MARGIN, COLORS, FONTS, ICONS} from '../../constants/Constants';

function ProfileImage(props) {
  const {iconName} = props;
  return (
    <View style={styles.profileView}>
      <Image
        style={styles.imageProfileStyle}
        source={require('../../assets/images/profile.png')}
      />
      <View
        style={
          iconName ? styles.iconNameView : {marginBottom: MARGIN.xlMargin}
        }>
        <Text style={styles.name}>عبدالرحمن محمد عياد</Text>
        {iconName ? (
          <Icon name={iconName} size={ICONS.smIcon} style={styles.icon} />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileView: {
    alignItems: 'center',
  },
  imageProfileStyle: {
    width: RFValue(100),
    height: RFValue(100),
    borderRadius: RFValue(50),
    marginBottom: MARGIN.smMargin,
  },
  name: {
    fontSize: FONTS.h5,
    fontWeight: 'bold',
    color: COLORS.darkGray,
  },
  iconNameView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: MARGIN.xlMargin,
  },
  icon: {
    marginStart: RFValue(5),
  },
});

export default ProfileImage;
