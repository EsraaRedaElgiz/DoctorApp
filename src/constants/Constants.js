import {RFValue} from 'react-native-responsive-fontsize';
export const COLORS = {};
export const ICONS = {
  xsIcon: RFValue(10) >= 10 ? RFValue(10) : 5,
  smIcon: RFValue(15) >= 15 ? RFValue(15) : 10,
  mdIcon: RFValue(20) >= 20 ? RFValue(20) : 15,
  lgIcon: RFValue(25) >= 25 ? RFValue(25) : 20,
  xlIcon: RFValue(30) >= 30 ? RFValue(30) : 25,
};
export const FONTS = {
  h1: RFValue(35) >= 35 ? RFValue(35) : 30,
  h2: RFValue(30) >= 30 ? RFValue(30) : 25,
  h3: RFValue(25) >= 25 ? RFValue(25) : 20,
  h4: RFValue(20) >= 20 ? RFValue(20) : 17,
  h5: RFValue(15) >= 15 ? RFValue(15) : 14,
  h6: RFValue(13) >= 13 ? RFValue(12) : 13,
  h7: RFValue(11) >= 11 ? RFValue(10) : 11,
};
export const RADIUS = {
  // general radius
  radius: 400,
  // more radius...
  xsRadius: 5,
  smRadius: 10,
  mdRadius: 15,
  lgRadius: 25,
  xlRadius: 30,
  xxlRadius: 35,
};
export const PADDINGS = {
  xsPadding: RFValue(5),
  smPadding: RFValue(10),
  mdPadding: RFValue(15),
  lgPadding: RFValue(20),
  xlPadding: RFValue(25),
};
