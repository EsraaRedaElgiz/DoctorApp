import React from "react";
import { View, ScrollView ,StatusBar} from 'react-native'
import { COLORS } from '../../constants/Constants'
import styles from './styles'
import HeaderArrowAndWord from "../../components/HeaderArrowAndWord/HeaderArrowAndWord";
import AppointmentAndHistoryComponent from '../../components/AppointmentAndHistoryComponent/AppointmentAndHistoryComponent'

function History() {
    return (
        <ScrollView >
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.blue} />
                <HeaderArrowAndWord
                    text="التاريخ"
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
                    style={styles.afterEachCardMargin}
                />
                <AppointmentAndHistoryComponent
                    doctorName="سامي علي"
                    doctorSpeciality="الطب العام والداخلي"
                    dateShow={true}
                    day="٤"
                    month="سبتمبر"
                    year="٢٠٢٢"
                    style={styles.afterEachCardMargin}
                />
                <AppointmentAndHistoryComponent
                    doctorName="سامي علي"
                    doctorSpeciality="الطب العام والداخلي"
                    dateShow={true}
                    day="٤"
                    month="سبتمبر"
                    year="٢٠٢٢"
                    style={styles.afterEachCardMargin}
                />
                <AppointmentAndHistoryComponent
                    doctorName="سامي علي"
                    doctorSpeciality="الطب العام والداخلي"
                    dateShow={true}
                    day="٤"
                    month="سبتمبر"
                    year="٢٠٢٢"
                    style={styles.afterEachCardMargin}
                />



            </View>
        </ScrollView>
    )


}
export default History;