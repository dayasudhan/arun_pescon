// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
     <Button
        title="New Enquiry"
        onPress={() => navigation.navigate('Input')}
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
        title="Detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

export default HomeScreen;