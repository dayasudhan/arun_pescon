import 'react-native-gesture-handler'; // Required for gesture-based navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import your screens and DrawerContent component
import HomeScreen from './screens/HomeScreen';
import EnquiryScreen from './screens/EnquiryScreen';
import DrawerContent from './screens/DrawerContent';

import ContractScreen from './screens/ContractScreen';
import InputScreen from './screens/InputScreen';
import DetailScreen from './screens/DetailScreen';
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Enquiries" component={EnquiryScreen} />
        <Drawer.Screen name="Contracts" component={ContractScreen} />
        <Drawer.Screen name="Input" component={InputScreen} />
        <Drawer.Screen name="Details" component={DetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;