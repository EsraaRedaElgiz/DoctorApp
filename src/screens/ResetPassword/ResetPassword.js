import React from "react";
import {
    Text,
    View,
    StatusBar
    , ScrollView
} from 'react-native'
import styles from './styles'
import { COLORS } from "../../constants/Constants";
import HeaderArrowAndWord from "../../components/HeaderArrowAndWord/HeaderArrowAndWord";
import Reusabletextinput from '../../components/AppTextinput/AppTextinput'
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import { TextInput } from 'react-native-paper';
function ResetPassword() {

    return (

        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollViewStyle} >
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.blue} />
                <HeaderArrowAndWord
                    text="إعاده تعيين كلمة المرور"
                    arrowButtonStyle={styles.arrowButtonStyle}
                    textColor={COLORS.black}
                    textStyle={styles.textHeaderStyle}
                />
                <View style={styles.viewForTextStyle}>
                    <Text style={styles.textStyle} >يجب ان تكون كلمة المرور الجديدة مختلفه عن كلمة المرور المستخدمه سابقا</Text>
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
                <View style={styles.viewBetweenLastTextInputAndButton}></View>

                <GeneralButton title="حفظ" />

            </View>
        </ScrollView>

    )

}
export default ResetPassword;
