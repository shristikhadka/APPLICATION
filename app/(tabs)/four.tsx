import { SafeAreaView,Text,StyleSheet } from 'react-native';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Functions</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
