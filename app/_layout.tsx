// Add any external providers and config to this file to be loaded on app run (ie fonts, colors etc.)
import { Stack } from 'expo-router/stack';
import { Lusitana_400Regular, Lusitana_700Bold, useFonts } from '@expo-google-fonts/lusitana';
import { Typography, Colors, Spacings } from 'react-native-ui-lib';

function initStyles() {
    Typography.loadTypographies({
        heading: {fontSize: 36, fontWeight: '600', fontFamily: 'Lusitana_700Bold'},
        subheading: {fontSize: 28, fontWeight: '500'},
        body: {fontSize: 18, fontWeight: '400'} 
    });
    Colors.loadColors({
        primaryColor: '#5a48f5',
        secondaryColor: '#81C3D7',
        textColor: '#221D23',
        errorColor: '#E63B2E',
        successColor: '#ADC76F',
        warnColor: '#FF963C'
    });
    Spacings.loadSpacings({
        page: 20,
        card: 12,
        gridGutter: 16 
    });
}

export default function AppLayoutRoot() {
  let [fontsLoaded] = useFonts({
    Lusitana_400Regular,
    Lusitana_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  initStyles();

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false}} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
