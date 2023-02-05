import React, { useState } from 'react';
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
import { COLORS, FONTS, ICONS, MARGIN, RADIUS } from '../../constants/Constants';
import Reusabletextinput from '../../components/AppTextinput/AppTextinput';
import HeaderArrowAndWord from '../../components/HeaderArrowAndWord/HeaderArrowAndWord'
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import GeneralButton from '../../components/GeneralButton/GeneralButton';
import { SelectList } from 'react-native-dropdown-select-list'


function MedicalSheet() {
  const [bloodType, setBloodType] = useState("")
  const [typeSelected, setTypeSelected] = useState("");
  const blood = [
    { key: '1', value: "A+" },
    { key: '2', value: "A-" },
    { key: '3', value: "B+" },
    { key: '4', value: "B-" },
    { key: '5', value: "O+" },
    { key: '6', value: "O-" },
    { key: '7', value: "AB+" },
    { key: '8', value: "AB-" }
  ]
  const type = [
    { key: '1', value: "ذكر" },
    { key: '2', value: 'أنثي' },
  ]

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
          <SelectList
            setSelected={(val) => setBloodType(val)}
            data={blood}
            save="value"
            boxStyles={styles.selectBoxStyle}
            search={false}
            placeholder="فصيلة الدم"
            inputStyles={styles.inputStyle}
            dropdownStyles={styles.dropDownListHeight}

          />
          <Reusabletextinput
            placeholder="الوزن"
            keyboardType="phone-pad"
            style={styles.firstTextInoutMargun}
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

          <SelectList
            setSelected={(val) => setTypeSelected(val)}
            data={type}
            save="value"
            boxStyles={styles.selectBoxStyle}
            search={false}
            placeholder="تحديد النوع"
            inputStyles={styles.inputStyle}
            dropdownStyles={styles.dropDownListHeight}


          />
          <GeneralButton title="تأكيد" style={styles.buttonMargin} />

        </View>
      </View>
    </ScrollView>

  );
}
export default MedicalSheet;
