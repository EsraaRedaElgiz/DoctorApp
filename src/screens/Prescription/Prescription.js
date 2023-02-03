import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import GeneralPage from '../../components/GeneralPage/GeneralPage';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import styles from './PrescriptionStyle';
import {
  COLORS,
  FONTS,
  ICONS,
  MARGIN,
  PADDINGS,
} from '../../constants/Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/AntDesign';
const {height} = Dimensions.get('window');

function Prescription(props) {
  const [head, setHead] = useState(['الدواء', 'المدة', 'ملاحظات']);
  const [data, setData] = useState([
    ['lorim', 'يومان', 'مرة'],
    ['hello', 'يوم', '3 مرات'],
    ['Hiii', 'يومان', 'مرة'],
    ['tmam', 'يومان', 'مرة'],
  ]);
  const [visible, setVisible] = useState(false);
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
          <View
            style={{
              borderWidth: 1,
              height: height * 0.05,
              backgroundColor: COLORS.white,
              borderColor: COLORS.gray,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDINGS.smPadding,
            }}>
            <Text style={styles.analysisText}>تحاليل</Text>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={styles.openButton}>
              <Text style={styles.openText}>افتح</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: 1,
              height: height * 0.05,
              backgroundColor: COLORS.lightGray3,
              borderColor: COLORS.gray,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDINGS.smPadding,
            }}>
            <Text style={styles.analysisText}>اشاعات</Text>
            <TouchableOpacity style={styles.openButton}>
              <Text style={styles.openText}>اضافة</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* MODAL analysis */}
      <Modal
        transparent
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}>
        <View style={styles.modal}>
          <View style={styles.wrapperView}>
            <View style={styles.headerView}>
              <Text style={styles.titleModal}>التحليل</Text>
            </View>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={{flex: 1}}>
              <Icon
                name="closecircleo"
                color={COLORS.white}
                size={ICONS.lgIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.imageView}>
            <Image
              source={require('../../assets/Images/pcr-analysis.jpeg')}
              style={styles.imageStyle}
            />
          </View>
        </View>
      </Modal>
    </GeneralPage>
  );
}

export default Prescription;
