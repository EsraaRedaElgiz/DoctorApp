import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Reusabletextinput from '../../components/AppTextinput/AppTextinput';
import GeneralButton from '../../components/GeneralButton/GeneralButton';
import GeneralPage from '../../components/GeneralPage/GeneralPage';
import VisaTypeCard from '../../components/VisaTypeCard/VisaTypeCard';
import {COLORS, FONTS} from '../../constants/Constants';
import styles from './AddCardStyle';

const {width, height} = Dimensions.get('window');

function AddCard(props) {
  const [payment, setPayment] = useState([
    {image: require('../../assets/Images/paypal.png')},
    {image: require('../../assets/Images/masterCard.png')},
    {image: require('../../assets/Images/visa.jpg')},
    {image: require('../../assets/Images/applePay.png')},
  ]);
  return (
    <GeneralPage>
      <View style={styles.container}>
        <Text style={styles.title}>طرق الدفع</Text>
        <View style={styles.visaTypeView}>
          {payment.map((el, idx) => {
            return <VisaTypeCard key={idx} image={el.image} />;
          })}
        </View>
        <Text style={styles.title}>املأ معلومات بطاقتك</Text>
        <View style={styles.inputView}>
          <Reusabletextinput
            placeholder="حامل البطاقة"
            bordercolor={COLORS.gray}
          />
        </View>
        <View style={styles.inputView}>
          <Reusabletextinput
            placeholder="رقم البطاقة"
            bordercolor={COLORS.gray}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.inputView,
              styles.smallTextInput,
              {marginRight: RFValue(20)},
            ]}>
            <Reusabletextinput
              placeholder="التاريخ"
              bordercolor={COLORS.gray}
            />
          </View>
          <View style={[styles.inputView, styles.smallTextInput]}>
            <Reusabletextinput
              placeholder="رقم تأكيد البطاقة"
              bordercolor={COLORS.gray}
            />
          </View>
        </View>
        <GeneralButton title="تأكيد" style={{marginTop: height * 0.3}} />
      </View>
    </GeneralPage>
  );
}

export default AddCard;
