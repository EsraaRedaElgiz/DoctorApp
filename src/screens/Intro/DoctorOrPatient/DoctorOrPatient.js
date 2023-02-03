import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    StatusBar
    , ScrollView
} from 'react-native'
import styles from './styles'
import { COLORS,} from "../../../constants/Constants";
import Appbutton from "../../../components/Appbutton/Appbutton";
function DoctorOrPatient() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.blue} />
                <View style={styles.viewForImageStyle}>
                    <Image source={require('../../../assets/Images/choose.png')} style={styles.imageStyle} />
                </View>
                <View style={styles.viewTextStyle}>
                    <Text style={styles.textStyle}>أنا...</Text>
                </View>
                <Appbutton
                    buttonText="مريض"
                    changeButtonStyle={styles.marginAfterFirstButton}
                />
                <Appbutton
                    buttonText="دكتور"
                    changeButtonStyle={styles.secondButtomStyle}

                />


            </View>
        </ScrollView>
    )
}
export default DoctorOrPatient;