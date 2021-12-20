import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, useColorScheme } from 'react-native';
import Colors from '../constants/Colors';
import TabOneScreen from '../screens/DeckListScreen';
import TabTwoScreen from '../screens/AddDeckScreen';
import Deck from '../components/Deck';
import Quiz from '../components/Quiz';
import AddCard from '../components/AddCard';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='TabOne'
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name='Deck list'
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Add deck'
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name='DeckListScreen'
        component={TabOneScreen}
        options={{ headerTitle: 'Deck List' }}
      />
      <TabOneStack.Screen
        name='Deck'
        component={Deck}
        options={{ headerTitle: 'Deck' }}
      />
      <TabOneStack.Screen
        name='Quiz'
        component={Quiz}
        options={{ headerTitle: 'Quiz' }}
      />
      <TabOneStack.Screen
        name='AddCard'
        component={AddCard}
        options={{ headerTitle: 'Add Card' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name='AddDeck'
        component={TabTwoScreen}
        options={{ headerTitle: 'Add Deck' }}
      />
    </TabTwoStack.Navigator>
  );
}
