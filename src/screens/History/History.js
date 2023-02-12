import React from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import { COLORS } from '../../constants/Constants';
import styles from './styles';
import HeaderArrowAndWord from '../../components/HeaderArrowAndWord/HeaderArrowAndWord';
import AppointmentAndHistoryComponent from '../../components/AppointmentAndHistoryComponent/AppointmentAndHistoryComponent';

function History() {
  const history = [
    {
      doctorName: "سامي علي",
      doctorSpeciality: "الطب العام والداخلي",
      day: "٤",
      month: "سبتمبر",
      year: "٢٠٢٢",
    }, {
      doctorName: "سامي علي",
      doctorSpeciality: "الطب العام والداخلي",
      day: "٤",
      month: "سبتمبر",
      year: "٢٠٢٢",
    }, {
      doctorName: "سامي علي",
      doctorSpeciality: "الطب العام والداخلي",
      day: "٤",
      month: "سبتمبر",
      year: "٢٠٢٢",
    }, {
      doctorName: "سامي علي",
      doctorSpeciality: "الطب العام والداخلي",
      day: "٤",
      month: "سبتمبر",
      year: "٢٠٢٢",
    }, {
      doctorName: "سامي علي",
      doctorSpeciality: "الطب العام والداخلي",
      day: "٤",
      month: "سبتمبر",
      year: "٢٠٢٢",
    }

  ]
  keyextractor = (item, index) => index.toString();
  const renderitems = ({ item, index }) => {
    const { doctorName, doctorSpeciality, day, month, year } = item
    return (
      <AppointmentAndHistoryComponent
        doctorName={doctorName}
        doctorSpeciality={doctorSpeciality}
        dateShow={true}
        day={day}
        month={month}
        year={year}
        style={styles.afterEachCardMargin}
      />

    )

  }
  return (

    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.blue} />
      <View style={styles.headerViewStyleAndFlatListStyle}>
        <HeaderArrowAndWord
          text="التاريخ"
          arrowButtonStyle={styles.arrowButtonStyle}
          textColor={COLORS.black}
          textStyle={styles.textHeaderStyle}
          style={styles.afterHeaderMargin}
        />
      </View>
      <FlatList
        keyExtractor={keyextractor}
        data={history}
        renderItem={renderitems}
        style={styles.headerViewStyleAndFlatListStyle}
        showsVerticalScrollIndicator={false}

      />

    </View>
  );
}
export default History;
