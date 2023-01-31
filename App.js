import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GeneralTextInput from './src/components/GeneralTextInput/GeneralTextInput';
import UserProfileButton from './src/components/UserProfileButton/UserProfileButton';
import GeneralButton from './src/components/GeneralButton/GeneralButton';
import Card from './src/components/Card/Card';
import Reusabletextinput from './src/components/AppTextinput/AppTextinput'
import { TextInput } from 'react-native-paper';
import Appbutton from './src/components/Appbutton/Appbutton'
import SignUp from './src/screens/signUp/signUp'
import LogIn from './src/screens/logIn/logIn'
import Reusabletextinput from './src/components/AppTextinput/AppTextinput';
import {TextInput} from 'react-native-paper';
import Appbutton from './src/components/Appbutton/Appbutton';
import SignUp from './src/screens/signUp/signUp';


function App() {
  return (
    <View style={styles.conatiner}>
      <LogIn />

     {/* <SignUp />*/}

    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    /* justifyContent: 'center',
    alignItems: 'center',
    padding: '4%'*/
  },
  title: {
    fontSize: 30,
    color: '#000',
    fontFamily: 'Amaranth',
  },
});

export default App;
