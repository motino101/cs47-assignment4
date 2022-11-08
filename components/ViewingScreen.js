import { Text, View, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ViewingScreen({ navigation, route }) { // note navigation pprop
  const params = route.params;
  return <WebView source={{ uri: params.external_url}} />;
}

const styles = StyleSheet.create({
  screenOne: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  screenOneText: {
    fontSize: 32,
  },
});