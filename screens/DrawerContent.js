import React from 'react';
import { View, Text, Button ,Image} from 'react-native';

function DrawerContent({ navigation }) {
  return (
    <View>
      <Text>Pescon</Text>
      <Image
         source={require('./../assets/logo.jpg')} // Local image
      />
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
        title="Input"
        onPress={() => navigation.navigate('Input')}
      />
    <Button
        title="Detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
    
  );
}

export default DrawerContent;