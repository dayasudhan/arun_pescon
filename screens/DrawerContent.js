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
        title="Enquiries"
        onPress={() => navigation.navigate('Enquiries')}
      />

       <Button
        title="Contracts"
        onPress={() => navigation.navigate('Contracts')}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

export default DrawerContent;