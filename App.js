import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Section from './Section';
export default function App() {
  return (
    <View style = {styles.container}>  
      <Text> Hellow</Text>

      <Section>

      </Section>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
