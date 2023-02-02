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
import styles from './style';
import {COLORS, FONTS, ICONS, MARGIN} from '../../constants/Constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Reusabletextinput from '../../components/AppTextinput/AppTextinput';
import {TextInput} from 'react-native-paper';
import Appbutton from '../../components/Appbutton/Appbutton';
import ReusableArrowButton from '../../components/AppRightIcon/AppRightIcon';

function SignUp() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.blue} />
      <ScrollView>
        <View style={styles.topViewStyle}>
          <ReusableArrowButton />
          <View style={styles.viewHeaderStyle}>
            <View style={styles.viewforheaderstyle}>
              <Text style={styles.firstTextHeaderStyle}>تسجيل</Text>
            </View>
            <View>
              <Text style={styles.secondTextHeaderStyle}>
                قم بانشاء حسابك الجديد
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.viewAfterHeaderStyle}>
          <Reusabletextinput
            placeholder="الاسم"
            style={styles.firsttextinputmargin}
            bordercolor={COLORS.gray}
          />
          <Reusabletextinput
            placeholder="رقم الهاتف"
            keyboardType="phone-pad"
            style={styles.eachtextinputmargin}
            bordercolor={COLORS.gray}
          />
          <Reusabletextinput
            placeholder="عنوان البريد الالكتروني"
            keyboardType="email-address"
            style={styles.eachtextinputmargin}
            bordercolor={COLORS.gray}
          />
          <Reusabletextinput
            placeholder="كلمه المرور"
            style={styles.eachtextinputmargin}
            right={
              <TextInput.Icon
                icon="eye"
                iconColor={COLORS.darkGray}
              />
            }
            bordercolor={COLORS.gray}
            secureTextEntry
          />
          <Reusabletextinput
            placeholder="تأكيد كلمه المرور"
            style={styles.eachtextinputmargin}
            right={
              <TextInput.Icon
                icon="eye"
                iconColor={COLORS.darkGray}
              />
            }
            bordercolor={COLORS.gray}
            secureTextEntry
          />
          <View style={styles.viewForfirstTextAfterTextinputs}>
            <View>
              <Text style={styles.textAfterTextinputsStyle}>
                بتسجيل الدخول فانك توافق علي
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.bluetextstyle}> شروط الاستخدام</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewForSecondTextAfterTextinputs}>
            <View>
              <Text style={styles.textAfterTextinputsStyle}>و</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.bluetextstyle}> سياسه الخصوصيه</Text>
            </TouchableOpacity>
          </View>

          <Appbutton buttontext="متابعه" />
          <View style={styles.viewForLastTextStyle}>
            <View>
              <Text style={styles.textAfterTextinputsStyle}>
                {' '}
                لديك حساب بالفعل؟
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.bluetextstyle}> تسجيل الدخول </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default SignUp;
