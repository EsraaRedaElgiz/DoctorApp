import React, { useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import styles from './styles';
import { Checkbox } from 'react-native-paper';
import { COLORS, ICONS } from '../../constants/Constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro'
import Reusabletextinput from '../../components/AppTextinput/AppTextinput'
import { TextInput } from "react-native-paper";
import Appbutton from '../../components/Appbutton/Appbutton'
import { RFValue } from 'react-native-responsive-fontsize';
import ReusableArrowButton from '../../components/AppRightIcon/AppRightIcon'


function LogIn() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.blue} />
            <ScrollView  >
                <View style={styles.topViewStyle} >
                    <ReusableArrowButton
                        style={styles.custombuttonIconStyle}
                    />

                    <View style={styles.viewHeaderStyle}>
                        <View style={styles.viewforheaderstyle}>
                            <Text style={styles.firstTextHeaderStyle}>اهلا بعودتك !</Text>
                        </View>
                        <View>
                            <Text style={styles.secondTextHeaderStyle}>تسجيل الدخول لحسابك</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.viewAfterHeaderStyle}>
                    <Reusabletextinput
                        placeholder="عنوان البريد الالكتروني"
                        keyboardType="email-address"
                        style={styles.firsttextinputmargin}
                        bordercolor={COLORS.gray}
                    />
                    <Reusabletextinput
                        placeholder="كلمه المرور"
                        style={styles.eachtextinputmargin}
                        bordercolor={COLORS.gray}
                        right={<TextInput.Icon icon="eye" style={styles.iconStyle} iconColor={COLORS.darkGray} />}
                        secureTextEntry
                    />
                    <View style={styles.viewForfirstTextAfterTextinputs}>
                        <View style={styles.viewforcheckboxandwordstyle}>
                            <View>
                                <Checkbox
                                    status={toggleCheckBox ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        setToggleCheckBox(!toggleCheckBox);
                                    }}
                                    color={COLORS.blue}
                                    uncheckedColor={COLORS.gray}
                                />
                            </View>
                            <View>
                                <Text style={styles.textAfterTextinputsStyle}>تذكرني</Text>
                            </View>

                        </View>
                        <TouchableOpacity  >
                            <Text style={styles.bluetextstyle}>نسيت كلمه المرور؟</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewfortwolinesandwordstyle}>
                        <View style={styles.lineviewstyle}></View>
                        <View>
                            <Text style={styles.orWordStyle}>OR</Text>
                        </View>
                        <View style={styles.lineviewstyle}></View>
                    </View>
                    <View style={styles.viewfortwoboxesstyle}>
                        <TouchableOpacity style={styles.twoSquaresStyle}>
                            <FontAwesome5Pro name="facebook" size={ICONS.xxlIcon} color={COLORS.blue} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.twoSquaresStyle}>
                            <Image source={require('../../assets/images/google.png')} style={styles.imagestyle} />
                        </TouchableOpacity>
                    </View>
                    <Appbutton
                        buttontext="متابعه"

                    />
                    <View style={styles.viewForLastTextStyle}>
                        <View>
                            <Text style={{ color: COLORS.darkGray3 }}>ليس لديك حساب ؟</Text>
                        </View>
                        <TouchableOpacity >
                            <Text style={styles.bluetextstyle}> انشاء حساب </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>

    )

}
export default LogIn;