import { View, Text, Button } from 'react-native-ui-lib';
import { router } from 'expo-router';
import { getAuth, signOut } from 'firebase/auth';
import { Alert } from 'react-native';

export default function SettingsTab() {

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then( () => {
      router.navigate('/');
    })
    .catch( (error) => {
      Alert.alert('Uh oh...something went wrong.');
    })
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Settings Tab</Text>
      <Button primaryColor onPress={handleSignOut}><Text white body>Logout</Text></Button>
    </View>
  );
}
