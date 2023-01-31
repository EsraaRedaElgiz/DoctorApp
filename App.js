import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GeneralTextInput from './src/components/GeneralTextInput/GeneralTextInput';
import UserProfileButton from './src/components/UserProfileButton/UserProfileButton';
import GeneralButton from './src/components/GeneralButton/GeneralButton';
import Card from './src/components/Card/Card';
import Reusabletextinput from './src/components/AppTextinput/AppTextinput';
import {TextInput} from 'react-native-paper';
import Appbutton from './src/components/Appbutton/Appbutton';
import SignUp from './src/screens/signUp/signUp';
import UserProfile from './src/screens/UserProfile/UserProfile';
import MedicalID1 from './src/screens/MedicalID1/MedicalID1';
import EditPersonDetails from './src/screens/EditPersonDetails/EditPersonDetails';

function App() {
  return <EditPersonDetails />;
}

export default App;
