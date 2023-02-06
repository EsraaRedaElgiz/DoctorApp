import React, { useState } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { COLORS } from '../../constants/Constants';
import Reusabletextinput from '../../components/AppTextinput/AppTextinput';
import HeaderArrowAndWord from '../../components/HeaderArrowAndWord/HeaderArrowAndWord'
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import GeneralButton from '../../components/GeneralButton/GeneralButton';
import DropDown from '../../components/DropDown/DropDown';

function MedicalSheet() {
  const [bloodType, setBloodType] = useState("")
  const [typeSelected, setTypeSelected] = useState("");
  const blood = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]
  const type = ["ذكر", 'أنثي']
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollViewStyle}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.blue} />
        <View style={styles.topViewStyle}>
          <HeaderArrowAndWord
            text="بيانات طبيه"
            textColor={COLORS.white}
            textStyle={styles.wordHeaderMargin}
            style={styles.customButtonIconAndWordMargin}
          />
          <View style={styles.viewHeaderStyle}>
            <ProfileImage
              iconOnImage={true}
            />
          </View>
        </View>

        <View style={styles.viewAfterHeaderStyle}>
          <DropDown
            style={styles.dropDownMarginBottom}
            data={blood}
            placeholder="فصيلة الدم"
          />
          <Reusabletextinput
            placeholder="الوزن"
            keyboardType="phone-pad"
            style={styles.firstTextInputMargun}
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
          <DropDown
            style={styles.dropDownMarginBottom}
            data={type}
            placeholder="تحديد النوع"
          />
          <View style={styles.buttonMargin}>
            <GeneralButton title="تأكيد"  />
          </View>
        </View>
      </View>
    </ScrollView>

  );
}
export default MedicalSheet;
