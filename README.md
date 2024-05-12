# native-nextui

Make beautiful Native Applications regardless of your design.

## Installation

```sh
npm install native-nextui
```

## Usage

```js
import { View, StyleSheet } from 'react-native';
import { Button } from 'native-nextui';

const App = () => {
  return (
    <View style={styles.container}>
      <Button>Button</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
