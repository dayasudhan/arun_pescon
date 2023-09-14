import React from 'react';
import { View, Text, Button } from 'react-native';

function DrawerContent({ navigation }) {
  return (
    <View>
      <Text>Drawer Content</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
       <Button
        title="Enquiry"
        onPress={() => navigation.navigate('Enquiry')}
      />
       <Button
        title="Enroll"
        onPress={() => navigation.navigate('Enroll')}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

export default DrawerContent;