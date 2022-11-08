import { StyleSheet, SafeAreaView, Text, Button, View, FlatList, Image, Pressable} from "react-native";
import { useSpotifyAuth, millisToMinutesAndSeconds } from "../utils";
import { Images, Themes } from "../assets/Themes";
import { ScrollView } from "react-native-web";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Constants from 'expo-constants';

import Ionicons from '@expo/vector-icons/Ionicons';


// RENDERTRACK: renders one song listing
export const renderTrack = ({ item, index }, navigation) => {
    return (
    <View style={[styles.item,{}]}>
    <Pressable onPress={() => {navigation.navigate("PreviewScreen", {external_url: item.external_urls.spotify})}}> 
        <View style={[styles.textSection, {flexDirection: 'row', alignItems: 'center'}]}>
    <Pressable onPress={() => {navigation.navigate("ViewingScreen", {external_url: item.preview_url})}}> 
        <Ionicons name="play-circle" size={32} color="green" />
    </Pressable>
      <Image style={{flex: 2, resizeMode: 'contain', height: 50, marginRight: 12}} source={ { uri:item.album.images[0].url } }/>
      <View style={[{flex: 5}]}>
        <Text style={[styles.name]}>{item.name}</Text> 
        <Text style={[{color: Themes.colors.gray}]}>{item.album.artists[0].name}</Text> 
      </View>
      <Text style={[styles.name, {flex: 3, marginRight: 5}]}>{item.album.name}</Text>
      <Text style={[styles.name, {flex: 2}]}>{millisToMinutesAndSeconds(item.duration_ms)}</Text>
    </View>
    </Pressable>
  </View>);
}

export default function TracksScreen({ navigation }) {
    const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  
    if (token) {
      return (
        <View style={[styles.container, {}]}>

            {/* title - nimanonatima - consumer products consumer */}
            <View style={{flexDirection: 'row', justifyContent:'center'}}>
            <View style={{marginBottom: 10,flexDirection: 'row', justifyContent:'center', alignItems: 'center', width: '55%'}}>
                <Image style={{flex: 2, resizeMode: 'contain', height: 25, marginRight: 1}} source={Images.spotify}/>
                <Text style={[styles.name, {fontSize: 24, fontWeight: 'bold'}]}>My Top Tracks</Text>
            </View>
            </View>
            
            <FlatList scroll={true}                                                                                
            data = {tracks} // just a fixed array
            renderItem = {(params) => renderTrack(params, navigation)} // called in a for loop to produce list objects
            keyExtractor = {(item) => item.id} // take item, return id
            />
            
        </View>);
    } else {


        // render authbutton
        return (
          
          <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent:'center'}}>
            <View style={{marginBottom: 10,flexDirection: 'row', justifyContent:'center', alignItems: 'center', width: '65%'}}>
              <Image style={{flex: 2, resizeMode: 'contain', height: 25, marginRight: 1}} source={Images.spotify}/>
              <Button  title="CONNECT WITH SPOTIFY" color="green" onPress={getSpotifyAuth}/>
            </View>
            </View>
            <Image style={{resizeMode: 'contain', height: 25, marginRight: 1}} source={Images.spotify}/>
          </View>
          
        );
  
  
      }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:Themes.colors.background,
      padding: 0,
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