// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function EnrollScreen({ navigation }) {
  return (
    <View>
      <Text>Enroll List</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

export default EnrollScreen;