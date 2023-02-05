import React, { useState } from "react";
import {
    Text,
    View,
    StatusBar
    , ScrollView
} from 'react-native'
import styles from './styles'
import { COLORS } from "../../constants/Constants";
import { RFValue } from "react-native-responsive-fontsize";
import HeaderArrowAndWord from "../../components/HeaderArrowAndWord/HeaderArrowAndWord";
import Appbutton from "../../components/Appbutton/Appbutton";
import Entypo from "react-native-vector-icons/Entypo";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
function VertificationCode() {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: 4 });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollViewStyle}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.blue} />
                <HeaderArrowAndWord
                    text="رمز التأكيد"
                    arrowButtonStyle={styles.arrowButtonStyle}
                    textColor={COLORS.black}
                    textStyle={styles.textHeaderStyle}
                />
                <View style={styles.viewImage}>
                    <View style={styles.viewBlueStyle}>
                        <Entypo name="check" size={RFValue(100)} color={COLORS.white} />
                    </View>
                </View>
                <View style={styles.viewForTextStyle}>
                    <Text style={styles.textStyle} >قم بإدخال رمز التأكيد المرسل لك عبر{'\n'}عبر البريد الالكتروني</Text>
                </View>
                <View style={styles.viewCodeFieldStyle}>
                    <CodeField
                        ref={ref}
                        {...props}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={4}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                </View>
                <Appbutton
                    buttonText="تأكيد"
                    changeButtonStyle={styles.buttonMargin}
                />
            </View>
        </ScrollView>
    )

}
export default VertificationCode;