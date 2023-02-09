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
import GeneralButton from "../../components/GeneralButton/GeneralButton";
import Entypo from "react-native-vector-icons/Entypo";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useSelector, useDispatch } from "react-redux";
import { setVertificationCode } from '../../Redux/Reducers/VertificationCodeSlice'
import { useForm, Controller } from "react-hook-form";
function VertificationCode() {
    const dispatch = useDispatch();
    const globalState = useSelector(state => state);
    const [value, setValue] = useState(globalState.VertificationCodeReducer.code);
    const ref = useBlurOnFulfill({ value, cellCount: 4 });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const { control, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            code: globalState.VertificationCodeReducer.code
        }
    });

    const onSubmit = (data) => {
        //console.log(data);
        dispatch(setVertificationCode(data.code))

    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.blue} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollViewStyle}>
                <View style={styles.viewForScrollviewContainer}>
                    <HeaderArrowAndWord
                        text="رمز التأكيد"
                        arrowButtonStyle={styles.arrowButtonStyle}
                        textColor={COLORS.black}
                        textStyle={styles.textHeaderStyle}
                    />
                    <View style={styles.viewImage}>
                        <View style={styles.viewBlueStyle}>
                            <Entypo name="check" size={RFValue(120)} color={COLORS.white} />
                        </View>
                    </View>
                    <View style={styles.viewForTextStyle}>
                        <Text style={styles.textStyle} >قم بإدخال رمز التأكيد المرسل لك عبر عبر البريد الالكتروني</Text>
                    </View>
                    <View style={styles.viewCodeFieldStyle}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                minLength: 4

                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <CodeField
                                    ref={ref}
                                    {...props}
                                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                                    value={value}
                                    // onChangeText={setValue}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    cellCount={4}
                                    keyboardType="number-pad"
                                    textContentType="oneTimeCode"
                                    renderCell={({ index, symbol, isFocused }) => (
                                        <Text
                                            key={index}
                                            style={[styles.cell, { borderColor: errors.code ? "#f00" : COLORS.gray }, isFocused && styles.focusCell]}
                                            onLayout={getCellOnLayoutHandler(index)}>
                                            {symbol || (isFocused ? <Cursor /> : null)}
                                        </Text>
                                    )}
                                />)}
                            name="code"
                        />
                        {/* {errors.code?.type === "required" && <Text style={styles.errorTestStyle}>يجب ادخال رمز التأكيد</Text>}
                        {errors.code?.type === 'minLength' && <Text style={styles.errorTestStyle}>يجب ادخال الارقام المرسله بالكامل</Text>}*/}
                        <Text style={styles.errorTestStyle}>
                            {errors.code?.type === "required" ? "يجب ادخال رمز التأكيد" :
                                errors.code?.type === "minLength" ? "يجب ادخال الارقام المرسله بالكامل" : ""
                            }
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainerStyle}>
                <GeneralButton title="تأكيد" style={styles.buttonStyle} onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    )

}
export default VertificationCode;