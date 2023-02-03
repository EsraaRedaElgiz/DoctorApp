import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import GeneralPage from '../../components/GeneralPage/GeneralPage';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import styles from './PrescriptionStyle';
import {COLORS, FONTS, MARGIN} from '../../constants/Constants';
import {RFValue} from 'react-native-responsive-fontsize';

function Prescription(props) {
  const [head, setHead] = useState(['الدواء', 'المدة', 'ملاحظات']);
  const [data, setData] = useState([
    ['lorim', 'يومان', 'مرة'],
    ['hello', 'يوم', '3 مرات'],
    ['Hiii', 'يومان', 'مرة'],
    ['tmam', 'يومان', 'مرة'],
  ]);
  return (
    <GeneralPage>
      <View style={styles.container}>
        <Text style={styles.title}>التشخيص</Text>
        <View style={styles.diagnosisView}>
          <Text style={styles.diagnosisText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
            velit vel nunc blandit venenatis. Quisque vulputate lacinia elit,
            nec varius enim mollis eu. Sed eget eleifend eros. Etiam vel eros id
            elit mattis efficitur. Pellentesque hendrerit quis mi ut commodo.
            Nullam est est, imperdiet vel mi maximus, pulvinar sodales orci.
          </Text>
        </View>
        <Text style={styles.title}>العلاج</Text>
        <View style={{marginVertical: MARGIN.mdMargin}}>
          <Table borderStyle={{borderWidth: 1}}>
            <Row
              data={head}
              flexArr={[1, 1, 1]}
              style={styles.head}
              textStyle={[
                styles.text,
                {fontSize: FONTS.h5, fontWeight: 'bold'},
              ]}
            />
            <TableWrapper style={styles.wrapper}>
              <Rows
                data={data}
                flexArr={[1, 1, 1]}
                style={styles.row}
                textStyle={styles.text}
              />
            </TableWrapper>
          </Table>
        </View>
        <Text style={styles.title}>التحاليل</Text>
        <View style={styles.analysis}>
          <TouchableOpacity style={styles.openButton}>
            <Text style={styles.openText}>Open</Text>
          </TouchableOpacity>
          <Text style={styles.analysisText}>PCR-Analysis</Text>
        </View>
        <View style={styles.analysis}>
          <TouchableOpacity style={styles.openButton}>
            <Text style={styles.openText}>Add</Text>
          </TouchableOpacity>
          <Text style={styles.analysisText}>Add</Text>
        </View>
      </View>
    </GeneralPage>
  );
}

export default Prescription;
