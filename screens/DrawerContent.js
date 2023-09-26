import React from 'react';
import { View, Text, Button ,Image} from 'react-native';

function DrawerContent({ navigation }) {
  return (
    <View>
      <Text>Pescon</Text>
      <Image
        // source={require('./../assets/splash.png')} // Local image
        // OR
        // source={{ uri: 'https://example.com/your-image.jpg' }} // Remote image
        // style={styles.image}
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
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    <Button
        title="Input"
        onPress={() => navigation.navigate('Input')}
      />
    <Button
        title="Individual"
        onPress={() => navigation.navigate('Individual')}
      />
    </View>
    
  );
}

export default DrawerContent;