import React from "react";
import { Text, View,  Image, StatusBar ,ScrollView} from 'react-native'
import styles from './styles'
import { COLORS } from "../../constants/Constants";
import HeaderArrowAndWord from "../../components/HeaderArrowAndWord/HeaderArrowAndWord";
import Reusabletextinput from '../../components/AppTextinput/AppTextinput'
import Appbutton from "../../components/Appbutton/Appbutton";
function ForgetPassword() {
    return (
        <ScrollView >
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.blue} />
            <HeaderArrowAndWord
                text="نسيت كلمه المرور"
                arrowButtonStyle={styles.arrowButtonStyle}
                textColor={COLORS.black}
                textStyle={styles.textHeaderStyle}
            />
            <View style={styles.viewImage}>
                <Image source={require('../../assets/Images/ForgetPassword.png')} style={styles.imageStyle} />
            </View>
            <View style={styles.viewForTextStyle}>
                <Text style={styles.textStyle} >قم بإدخال بريدك الالكتروني او رقم الهاتف{'\n'}لارسال رمز التأكيد</Text>
            </View>
            <Reusabletextinput 
            style={styles.textInputMargin}
            placeholder="عنوان البريد الالكتروني/رقم الهاتف"
            bordercolor={COLORS.gray}
            />
            <Appbutton 
            buttonText="ارسال"
            changeButtonStyle={styles.buttonMargin}
            />
        </View>
        </ScrollView>
    )

}
export default ForgetPassword;