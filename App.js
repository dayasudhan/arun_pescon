import 'react-native-gesture-handler'; // Required for gesture-based navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import your screens and DrawerContent component
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import DrawerContent from './screens/DrawerContent';
import EnquiryScreen from './screens/Enquiry';
import EnrollScreen from './screens/Enroll';
import RegisterForm from './screens/RegisterForm';
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Enquiry" component={EnquiryScreen} />
        <Drawer.Screen name="Enroll" component={EnrollScreen} />
        <Drawer.Screen name="Register" component={RegisterForm} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;