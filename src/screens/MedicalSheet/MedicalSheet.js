import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {COLORS, FONTS, ICONS, MARGIN} from '../../constants/Constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Reusabletextinput from '../../components/AppTextinput/AppTextinput';
import {TextInput} from 'react-native-paper';
import Appbutton from '../../components/Appbutton/Appbutton';
import HeaderArrowAndWord from '../../components/HeaderArrowAndWord/HeaderArrowAndWord'
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import { RFValue } from 'react-native-responsive-fontsize';

function MedicalSheet() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.blue} />
      <ScrollView>
        <View style={styles.topViewStyle}>
            <HeaderArrowAndWord
            text="بيانات طبيه" 
            textColor={COLORS.white}
            textStyle={styles.wordHeaderMargin}
            />
          <View style={styles.viewHeaderStyle}>
          <ProfileImage
          iconOnImage={true}
         
          />
          </View>
        </View>

        <View style={styles.viewAfterHeaderStyle}>
          <Reusabletextinput
            placeholder="فصيلة الدم"
            style={styles.firsttextinputmargin}
            bordercolor={COLORS.gray}
          />
          <Reusabletextinput
            placeholder="الوزن"
            keyboardType="phone-pad"
            style={styles.eachTextInputMargin}
            bordercolor={COLORS.gray}
          />
          <Reusabletextinput
            placeholder="الطول"
            keyboardType="email-address"
            style={styles.eachTextInputMargin}
            bordercolor={COLORS.gray}
          />
          <Reusabletextinput
            placeholder="السن"
            style={styles.eachTextInputMargin}
          
            bordercolor={COLORS.gray}
          />
          <Reusabletextinput
            placeholder="النوع"
            style={styles.lastTextInputMargin}
            bordercolor={COLORS.gray}
            
          />
          
          
          <Appbutton buttonText="تأكيد"/>
          
        </View>
      </ScrollView>
    </View>
  );
}
export default MedicalSheet;
