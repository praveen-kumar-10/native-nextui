import React from 'react';
import { Alert, View } from 'react-native';
import { Button } from 'native-nextui';

const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() =>
          Alert.alert('React Native NextUI', 'Hello World!', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ])
        }
      >
        Click
      </Button>
    </View>
  );
};

export default Home;
