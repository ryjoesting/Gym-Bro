import { View, Text, Button } from 'react-native-ui-lib';
import { router } from 'expo-router';

export default function SettingsTab() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Settings Tab</Text>
      <Button primaryColor onPress={()=>{router.replace('/')}}><Text white body>Logout</Text></Button>
    </View>
  );
}
