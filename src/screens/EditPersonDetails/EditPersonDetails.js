import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import Reusabletextinput from '../../components/AppTextinput/AppTextinput';
import {TextInput} from 'react-native-paper';
import GeneralPage from '../../components/GeneralPage/GeneralPage';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import {COLORS, ICONS, MARGIN} from '../../constants/Constants';
import styles from './EditPersonDetailsStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';
import SelectDropdown from 'react-native-select-dropdown';

function EditPersonDetails(props) {
  const [visible, setVisible] = useState(false);
  const [bloodType, setBloodType] = useState('نوع الدم');
  const handleVisible = () => {
    setVisible(true);
  };
  const updateBloodType = type => {
    setBloodType(type);
  };

  const countries = ['A+', 'B+', 'C+'];
  return (
    <GeneralPage>
      <View style={styles.conatiner}>
        <ProfileImage iconName="edit" />
        <View style={styles.dropDownView}>
          <SelectDropdown
            renderDropdownIcon={() => (
              <Icon name="caretdown" size={ICONS.xsIcon} color={COLORS.gray} />
            )}
            buttonTextStyle={{textAlign: 'left'}}
            rowTextStyle={{textAlign: 'right'}}
            buttonStyle={styles.buttonStyle}
            defaultButtonText="نوع الدم"
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
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
