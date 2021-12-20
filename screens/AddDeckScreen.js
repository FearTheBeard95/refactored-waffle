import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import AddDeck from '../components/AddDeck';
import { white } from '../utils/colors';

export default function TabTwoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AddDeck navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
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
