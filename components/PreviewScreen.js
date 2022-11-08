import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PreviewScreen({navigation, route}) {
  const params = route.params;
  return <WebView source={{ uri: params.external_url}} />;
}

const styles = StyleSheet.create({
  screenTwo: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  screenTwoText: {
    fontSize: 32,
  },
});