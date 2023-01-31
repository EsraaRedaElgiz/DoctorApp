import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import Reusabletextinput from '../../components/AppTextinput/AppTextinput';
import {TextInput} from 'react-native-paper';
import GeneralPage from '../../components/GeneralPage/GeneralPage';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import {COLORS, ICONS} from '../../constants/Constants';
import styles from './EditPersonDetailsStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';

function EditPersonDetails(props) {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(true);
  };
  return (
    <GeneralPage>
      <View style={styles.conatiner}>
        <ProfileImage iconName="edit" />
        <View style={styles.inputView}>
          <Reusabletextinput
            placeholder="نوع الدم"
            bordercolor={COLORS.gray}
            right={
              <TextInput.Icon
                onPress={handleVisible}
                icon="chevron-down"
                style={styles.iconStyle}
                iconColor={COLORS.darkGray}
              />
            }
          />
        </View>
        <View style={styles.inputView}>
          <Reusabletextinput placeholder="الوزن" bordercolor={COLORS.gray} />
        </View>
        <View style={styles.inputView}>
          <Reusabletextinput placeholder="الطول" bordercolor={COLORS.gray} />
        </View>
        <View style={styles.inputView}>
          <Reusabletextinput placeholder="العمر" bordercolor={COLORS.gray} />
        </View>
        <View style={styles.inputView}>
          <Reusabletextinput placeholder="النوع" bordercolor={COLORS.gray} />
        </View>
        <View style={styles.inputView}>
          <Reusabletextinput
            placeholder="رقم الهاتف"
            bordercolor={COLORS.gray}
          />
        </View>
      </View>
      <Modal
        transparent
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <Icon
            onPress={() => {
              setVisible(false);
            }}
            name="closecircleo"
            size={ICONS.mdIcon}
            style={{textAlign: 'left', marginBottom: RFValue(10)}}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.bloodType}>A+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.bloodType}>B+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.bloodType}>C+</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </GeneralPage>
  );
}

export default EditPersonDetails;
