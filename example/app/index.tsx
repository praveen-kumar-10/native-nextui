import React from 'react';
import { Alert, View, StyleSheet } from 'react-native';
import { Button } from 'native-nextui';

const Home = () => {
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
