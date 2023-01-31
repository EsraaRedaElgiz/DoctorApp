import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import { COLORS, FONTS, ICONS, MARGIN } from '../../constants/Constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Reusabletextinput from '../../components/AppTextinput/AppTextinput'
import { TextInput } from "react-native-paper";
import Appbutton from '../../components/Appbutton/Appbutton'
import { RFValue } from 'react-native-responsive-fontsize';

function LogIn() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.blue} />
            <ScrollView  >
                <View style={styles.topViewStyle} >
                    <TouchableOpacity style={styles.buttonIconStyle}>
                        <AntDesign name="right" color={COLORS.darkGray} size={ICONS.mdIcon} />
                    </TouchableOpacity>
                    <View style={styles.viewHeaderStyle}>
                        <Text style={styles.firstTextHeaderStyle}>اهلا بعودتك !</Text>
                        <Text style={styles.secondTextHeaderStyle}>تسجيل الدخول لحسابك</Text>
                    </View>
                </View>

                <View style={styles.viewAfterHeaderStyle}>


                    <Reusabletextinput
                        placeholder="عنوان البريد الالكنروني"
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
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
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
                        <View style={{width:'45%',height:RFValue(2),backgroundColor:COLORS.gray}}></View>
                        <View>
                            <Text style={{color:COLORS.darkGray2}}>OR</Text>
                        </View>
                        <View style={{width:'45%',height:RFValue(2),backgroundColor:COLORS.gray}}></View>
                    </View>
                    <View style={styles.viewfortwoboxesstyle}>
                        <View style={{width:RFValue(50),height:RFValue(50),borderRadius:5,marginHorizontal:'5%',backgroundColor:"#f7f9f9f9",elevation:3}}>

                        </View>
                        <View style={{width:RFValue(50),height:RFValue(50),borderRadius:5,marginHorizontal:'5%',backgroundColor:"#f7f9f9f9",elevation:3}}>

                        </View>

                    </View>


                    <Appbutton
                        buttontext="متابعه"

                    />
                    <View style={styles.viewForLastTextStyle}>
                        <View>
                            <Text style={{color:COLORS.darkGray3}}>ليس لديك حساب ؟</Text>
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