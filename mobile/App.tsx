import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      <StatusBar style="auto" />
      <Button />
    </View>
  );
}

interface ButtonProps {
  title: string
}

function Button(){
  return(
    <TouchableOpacity>
      <Text>
        Hello
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
