import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import image from './assets/images/background1.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    color: 'black',
    fontSize: 40,
  },
  image: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },

});
