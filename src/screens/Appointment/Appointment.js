import React from "react";
import { View, ScrollView, StatusBar } from 'react-native'
import { COLORS } from '../../constants/Constants'
import styles from './styles'
import HeaderArrowAndWord from "../../components/HeaderArrowAndWord/HeaderArrowAndWord";
import AppointmentAndHistoryComponent from '../../components/AppointmentAndHistoryComponent/AppointmentAndHistoryComponent'

function Appointment() {
    return (
        <ScrollView  >

            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.blue} />
                <HeaderArrowAndWord
                    text="المواعيد"
                    arrowButtonStyle={styles.arrowButtonStyle}
                    textColor={COLORS.black}
                    textStyle={styles.textHeaderStyle}
                    style={styles.afterHeaderMargin}
                />
                <AppointmentAndHistoryComponent
                    doctorName="سامي علي"
                    doctorSpeciality="الطب العام والداخلي"
                    dateShow={true}
                    day="٤"
                    month="سبتمبر"
                    year="٢٠٢٢"
                    timeShow={true}
                    time="٣٠:٥"
                    status="م"
                    style={styles.afterEachCardMargin}
                />
                <AppointmentAndHistoryComponent
                    doctorName="سامي علي"
                    doctorSpeciality="الطب العام والداخلي"
                    dateShow={true}
                    day="٤"
                    month="سبتمبر"
                    year="٢٠٢٢"
                    timeShow={true}
                    time="٣٠:٥"
                    status="م"
                    style={styles.afterEachCardMargin}
                />
                <AppointmentAndHistoryComponent
                    doctorName="سامي علي"
                    doctorSpeciality="الطب العام والداخلي"
                    dateShow={true}
                    day="٤"
                    month="سبتمبر"
                    year="٢٠٢٢"
                    timeShow={true}
                    time="٣٠:٥"
                    status="م"
                    style={styles.afterEachCardMargin}
                />
                <AppointmentAndHistoryComponent
                    doctorName="سامي علي"
                    doctorSpeciality="الطب العام والداخلي"
                    dateShow={true}
                    day="٤"
                    month="سبتمبر"
                    year="٢٠٢٢"
                    timeShow={true}
                    time="٣٠:٥"
                    status="م"
                    style={styles.afterEachCardMargin}
                />
                <AppointmentAndHistoryComponent
                    doctorName="سامي علي"
                    doctorSpeciality="الطب العام والداخلي"
                    dateShow={true}
                    day="٤"
                    month="سبتمبر"
                    year="٢٠٢٢"
                    timeShow={true}
                    time="٣٠:٥"
                    status="م"
                    style={styles.afterEachCardMargin}
                />


            </View>
        </ScrollView>


    )


}
export default Appointment;