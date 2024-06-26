import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, FlatList } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from './style/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DetailsScreen } from './Screens/Tetanus.js'
import { home_Style } from './style/HomeStyle.js';

const Stack = createStackNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = COLORS.orange;

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{ headerStyle: home_Style.header, headerTitleStyle: { color: COLORS.white, headerRight: () => <Headermenu />, },headerTintColor: COLORS.white }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Impfpass Hauptseite", }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const HomeScreen = ({ navigation }) => (
  <View >
    <View style={home_Style.stack}>
      <Text style={home_Style.stack}>Impfstatus</Text>
    </View>


    <View >
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
              <View style={home_Style.tabStatus}>
                <Icon name={item.aktiv} size={35} color={item.color} />
              </View>
              <View style={home_Style.tab} >
                <Text style={{color:COLORS.orange}}>{item.key}</Text>
              </View>
              <View style={home_Style.tab} >
                <Icon name='pending' size={35} color={COLORS.orange} onPress={() => navigation.navigate(item.link)} />
              </View>
            </View>
          }
        />
      </View>
    </View>
  </View>
);



