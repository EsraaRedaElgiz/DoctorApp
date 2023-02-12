import React from "react";
import { View, StatusBar, FlatList } from 'react-native'
import { COLORS, PADDINGS } from '../../constants/Constants'
import styles from './styles'
import HeaderArrowAndWord from "../../components/HeaderArrowAndWord/HeaderArrowAndWord";
import AppointmentAndHistoryComponent from '../../components/AppointmentAndHistoryComponent/AppointmentAndHistoryComponent'
//import {appointment} from '../../utils/DummyData'

function Appointment() {
    const appointments = [
        {
            doctorName: "سامي علي",
            doctorSpeciality: "الطب العام والداخلي",
            day: "٤",
            month: "سبتمبر",
            year: "٢٠٢٢",
            time: "٣٠:٥",
            status: "م"
        }, {
            doctorName: "سامي علي",
            doctorSpeciality: "الطب العام والداخلي",
            day: "٤",
            month: "سبتمبر",
            year: "٢٠٢٢",
            time: "٣٠:٥",
            status: "م"
        }, {
            doctorName: "سامي علي",
            doctorSpeciality: "الطب العام والداخلي",
            day: "٤",
            month: "سبتمبر",
            year: "٢٠٢٢",
            time: "٣٠:٥",
            status: "م"
        }, {
            doctorName: "سامي علي",
            doctorSpeciality: "الطب العام والداخلي",
            day: "٤",
            month: "سبتمبر",
            year: "٢٠٢٢",
            time: "٣٠:٥",
            status: "م"
        }, {
            doctorName: "سامي علي",
            doctorSpeciality: "الطب العام والداخلي",
            day: "٤",
            month: "سبتمبر",
            year: "٢٠٢٢",
            time: "٣٠:٥",
            status: "م"
        }

    ]
    keyextractor = (item, index) => index.toString();
    const renderitems = ({ item, index }) => {
        const { doctorName, doctorSpeciality, day, month, year, time, status } = item
        return (
            <AppointmentAndHistoryComponent
                doctorName={doctorName}
                doctorSpeciality={doctorSpeciality}
                dateShow={true}
                day={day}
                month={month}
                year={year}
                timeShow={true}
                time={time}
                status={status}
                style={styles.afterEachCardMargin}
            />

        )

    }
    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.blue} />
            <View style={styles.headerViewStyleAndFlatListStyle}>
                <HeaderArrowAndWord
                    text="المواعيد"
                    arrowButtonStyle={styles.arrowButtonStyle}
                    textColor={COLORS.black}
                    textStyle={styles.textHeaderStyle}
                    style={styles.afterHeaderMargin}
                />
            </View>
            <FlatList
                keyExtractor={keyextractor}
                data={appointments}
                renderItem={renderitems}
                style={styles.headerViewStyleAndFlatListStyle}
                showsVerticalScrollIndicator={false}

            />
        </View>


    )


}
export default Appointment;