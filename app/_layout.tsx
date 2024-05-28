// Add any external providers and config to this file to be loaded on app run (ie fonts, colors etc.)
import { Stack } from 'expo-router/stack';
import {Colors, Typography, Spacings} from 'react-native-ui-lib';

Colors.loadColors({
  primaryColor: '#2364AA',
  secondaryColor: '#81C3D7',
  textColor: '#221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '#FF963C'
});

Typography.loadTypographies({
  heading: {fontSize: 36, fontWeight: '600'},
  subheading: {fontSize: 28, fontWeight: '500'},
  body: {fontSize: 18, fontWeight: '400', fontfamily: 'Platypi'} 
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16 
});

export default function AppLayoutRoot() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false}} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
