import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from './style/color';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: home_Style.header, headerTitleStyle: { color: COLORS.white, headerRight: () => <Headermenu />, } }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Impfpass Hauptseite", }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>

    <View style={home_Style.stack}>

      <View style={home_Style.container}>
        <FlatList
          data={[
            { key: 'Tetanus', link: 'Details', aktiv: 'done', color: COLORS.green },
            { key: 'Diphtherie', link: 'Details', aktiv: 'done', color: COLORS.green },
            { key: 'Pertussis', link: 'Details', aktiv: 'done', color: COLORS.green },
            { key: 'Poliomyelitis', link: 'Details', aktiv: 'done', color: COLORS.green },
            { key: 'Hib', link: 'Details', aktiv: 'done', color: COLORS.green },
            { key: 'Hepatitis B', link: 'Details', aktiv: 'done', color: COLORS.green },
            { key: 'Masern, Mumps, Röteln', link: 'Details', aktiv: 'dangerous', color: COLORS.red },
            { key: 'Varizellen', link: 'Details', aktiv: 'done', color: COLORS.green },
            { key: 'Meningokokken', link: 'Details', aktiv: 'done', color: COLORS.green },
            { key: 'Pneumokokken', link: 'Details', aktiv: 'done', color: COLORS.green },
            { key: 'Rotavirus', link: 'Details', aktiv: 'dangerous', color: COLORS.red },
            { key: 'Influenza', link: 'Details', aktiv: 'done', color: COLORS.green },
            { key: 'Zoster', link: 'Details', aktiv: 'done', color: COLORS.green }
          ]}
          renderItem={({ item }) =>
            <View style={home_Style.tabBar}>
              <View style={home_Style.tabBar}>
                <Icon name={item.aktiv} size={30} color={item.color} />
              </View>
              <View style={home_Style.tab}>
                <Text>{item.key}</Text>
              </View>
              <View style={home_Style.tab}>
                <Icon name='pending' size={30} color={COLORS.blue} onPress={() => navigation.navigate(item.link)} />
              </View>
            </View>
          }
        />
      </View>
    </View>
  </View>
);

const DetailsScreen = () => (
  <View>
    <Text>Details Screen</Text>
  </View>
);

const Headermenu = () => {
  return (
    <Button
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff"
    />
  );
};

const home_Style = StyleSheet.create({
  header: {
    backgroundColor: COLORS.blue,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopColor: '#333333',
    borderTopWidth: 1,
  },
  tab: {
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stack: {

  },
  container: {}
});
