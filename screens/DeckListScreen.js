import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import DeckList from '../components/DeckList';
import { white } from '../utils/colors';

export default function TabOneScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <DeckList navigation={navigation} />
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
