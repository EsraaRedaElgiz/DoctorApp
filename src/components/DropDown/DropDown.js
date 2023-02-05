import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, ICONS, MARGIN} from '../../constants/Constants';
import Icon from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';
import SelectDropdown from 'react-native-select-dropdown';

function DropDown(props) {
  const {data, placeholder} = props;
  return (
    <View style={styles.dropDownView}>
      <SelectDropdown
        renderDropdownIcon={() => (
          <Icon name="caretdown" size={ICONS.xsIcon} color={COLORS.gray} />
        )}
        buttonTextStyle={{textAlign: 'left'}}
        rowTextStyle={{textAlign: 'right'}}
        buttonStyle={styles.buttonStyle}
        defaultButtonText={placeholder}
        data={data}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropDownView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    marginBottom: MARGIN.mdMargin,
  },
  buttonStyle: {
    flex: 1,
    borderWidth: 1,
    borderRadius: RFValue(5),
    borderColor: COLORS.gray,
    backgroundColor: COLORS.white,
    height: RFValue(46),
  },
});

export default DropDown;
