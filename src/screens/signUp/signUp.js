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

function SignUp() {
    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.blue} />
            <ScrollView  >
                <View style={styles.topViewStyle} >
                    <TouchableOpacity style={styles.buttonIconStyle}>
                        <AntDesign name="right" color={COLORS.darkGray} size={ICONS.mdIcon} />
                    </TouchableOpacity>
                    <View style={styles.viewHeaderStyle}>
                        <Text style={styles.firstTextHeaderStyle}>تسجيل</Text>
                        <Text style={styles.secondTextHeaderStyle}>قم بانشاء حسابك الجديد</Text>
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
                        style={styles.eachtextinputmargin}
                        bordercolor={COLORS.gray}


                    />
                    <Reusabletextinput
                        placeholder="عنوان البريد الالكتروني"
                        style={styles.eachtextinputmargin}
                        bordercolor={COLORS.gray}

                    />
                    <Reusabletextinput
                        placeholder="كلمه المرور"
                        style={styles.eachtextinputmargin}
                        right={<TextInput.Icon icon="eye" style={styles.iconStyle} iconColor={COLORS.darkGray} />}
                        bordercolor={COLORS.gray}
                        secureTextEntry

                    />
                    <Reusabletextinput
                        placeholder="تأكيد كلمه المرور"
                        style={styles.eachtextinputmargin}
                        right={<TextInput.Icon icon="eye" style={styles.iconStyle} iconColor={COLORS.darkGray} />}
                        bordercolor={COLORS.gray}
                        secureTextEntry



                    />
                    <View style={styles.viewForfirstTextAfterTextinputs}>
                        <View>
                            <Text style={styles.textAfterTextinputsStyle}>بتسجيل الدخول فانك نوافق علي</Text>
                        </View>
                        <TouchableOpacity  >
                            <Text style={styles.bluetextstyle}> شروط الاستخدام</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewForSecondTextAfterTextinputs}>
                        <View>
                            <Text>و</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.bluetextstyle}> سياسه الخصوصيه</Text>
                        </TouchableOpacity>
                    </View>

                    <Appbutton
                        buttontext="متابعه"

                    />
                    <View style={styles.viewForLastTextStyle}>
                        <View>
                            <Text style={styles.textAfterTextinputsStyle}> لديك حساب بالفعل؟</Text>
                        </View>
                        <TouchableOpacity >
                            <Text style={styles.bluetextstyle}>تسجيل الدخول </Text>
                        </TouchableOpacity>

                    </View>


                </View>
            </ScrollView>
        </View>

        
  );
}
export default SignUp;
