import React from "react";
import {
    Text,
    View,
    StatusBar
    , ScrollView
} from 'react-native'
import styles from './styles'
import { COLORS} from "../../constants/Constants";
import HeaderArrowAndWord from "../../components/HeaderArrowAndWord/HeaderArrowAndWord";
import Reusabletextinput from '../../components/AppTextinput/AppTextinput'
import Appbutton from "../../components/Appbutton/Appbutton";
import { TextInput } from 'react-native-paper';
function ResetPassword() {

    return (

        <ScrollView >
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.blue} />
                <HeaderArrowAndWord
                    text="إعادة تعيين كلمة السر"
                    arrowButtonStyle={styles.arrowButtonStyle}
                    textColor={COLORS.black}
                    textStyle={styles.textHeaderStyle}
                />
                <View style={styles.viewForTextStyle}>
                    <Text style={styles.textStyle} >يجب ان تكون كلمة المرور الجديدة</Text>
                    <Text style={styles.textStyle}>مختلفه عن كلمه المرور المستخدمه</Text>
                    <Text style={styles.textStyle}>سابقا</Text>
                </View>               
                <Reusabletextinput
                    placeholder="كلمه المرور"
                    right={
                        <TextInput.Icon
                            icon="eye"
                            iconColor={COLORS.darkGray}
                        />
                    }
                    bordercolor={COLORS.gray}
                    secureTextEntry
                    style={styles.firstTextInputMargin}

                />
                <Reusabletextinput
                    placeholder="تأكيد كلمه المرور"
                    right={
                        <TextInput.Icon
                            icon="eye"
                            iconColor={COLORS.darkGray}
                        />
                    }
                    bordercolor={COLORS.gray}
                    secureTextEntry
                    style={styles.secondTextInputMargin}
                />
                <Appbutton
                    buttonText="حفظ"
                    
                />
            </View>
        </ScrollView>

    )

}
export default ResetPassword;