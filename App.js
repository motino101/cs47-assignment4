import { StyleSheet, SafeAreaView, Text, Button, View, FlatList, Image, Pressable} from "react-native";
import { useSpotifyAuth, millisToMinutesAndSeconds } from "./utils";
import { Images, Themes } from "./assets/Themes";
import { ScrollView } from "react-native-web";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Constants from 'expo-constants';

// ______________________________________________ assignment 4
// get screens
// IMPORTED SCREENS **
import ViewingScreen from './components/ViewingScreen';
import PreviewScreen from './components/PreviewScreen';
import TracksScreen from './components/TracksScreen'; 
// CREATE A STACK **
const Stack = createStackNavigator();

// ______________________________________________ assignment 3

export default function App() {
      return (
      <View style={[styles.container, {}]}>

        {/* navigation */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name = "TracksScreen" component = {TracksScreen}/>
            <Stack.Screen name = "PreviewScreen" component = {PreviewScreen} options={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
            <Stack.Screen name = "ViewingScreen" component = {ViewingScreen} options={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
          </Stack.Navigator>
        </NavigationContainer>
        
      </View>);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:Themes.colors.background,
    padding: 20,
    paddingTop: 54,
    justifyContent: 'center',
    flex: 1,
    
  },

  authPage: {
    justifyContent: 'center',
    backgroundColor:Themes.colors.background,
    alignItems: 'center',
    flex: 1,
  },

  item: {
    padding: 10,
    width: '100%',
    flex: 1,
  },

  name: {
    color: Themes.colors.white,
  },
});