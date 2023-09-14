// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Enquiries"
        onPress={() => navigation.navigate('Enquiries')}
      />
      <Button
        title="Go to Registration"
        onPress={() => navigation.navigate('Register')}
      />
            <Button
        title="Go to Contracts"
        onPress={() => navigation.navigate('Contracts')}
      />
    </View>
  );
}

export default HomeScreen;