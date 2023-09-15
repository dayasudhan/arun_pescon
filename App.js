import 'react-native-gesture-handler'; // Required for gesture-based navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import your screens and DrawerContent component
import HomeScreen from './screens/HomeScreen';
import EnquiryScreen from './screens/EnquiryScreen';
import DrawerContent from './screens/DrawerContent';

import ContractScreen from './screens/ContractScreen';
import RegisterForm from './screens/RegisterForm';
import InputScreen from './screens/InputScreen';
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Enquiries" component={EnquiryScreen} />
        <Drawer.Screen name="Contracts" component={ContractScreen} />
        <Drawer.Screen name="Register" component={RegisterForm} />
        <Drawer.Screen name="Input" component={InputScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;