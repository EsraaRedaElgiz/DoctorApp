import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import styles from './style';
import { COLORS, FONTS, ICONS, MARGIN } from '../../constants/Constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Reusabletextinput from '../../components/AppTextinput/AppTextinput'
import { TextInput } from "react-native-paper";
import Appbutton from '../../components/Appbutton/Appbutton'

function SignUp() {
    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.blue} />
            <ScrollView  >
                <View style={styles.topViewStyle} >
                    <TouchableOpacity style={styles.buttonIconStyle}>
                        <AntDesign name="left" color={COLORS.darkGray} size={ICONS.mdIcon} />
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



                    />
                    <View style={styles.viewForTextAfterTextinputs}>
                        <Text style={styles.textAfterTextinputsStyle}>By signing you agree to our
                            <TouchableOpacity  >
                                <Text style={styles.bluetextstyle}> Terms of use</Text>
                            </TouchableOpacity>
                        </Text>
                        <Text style={styles.textAfterTextinputsStyle}>and
                            <TouchableOpacity>
                                <Text style={styles.bluetextstyle}> privacy policy</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>

                    <Appbutton
                        buttontext="متابعه"

                    />
                    <View style={styles.viewForLastTextStyle}>
                        <Text style={styles.textAfterTextinputsStyle}>Already have an account?
                            <TouchableOpacity >
                                <Text style={styles.bluetextstyle}>Log in</Text>
                            </TouchableOpacity>
                        </Text>

                    </View>


                </View>
            </ScrollView>
        </View>

    )

}
export default SignUp;