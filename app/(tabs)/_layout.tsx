import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Colors, Typography } from 'react-native-ui-lib';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: Colors.$iconPrimary, 
      headerStyle: {backgroundColor: Colors.$backgroundPrimaryHeavy},
      headerTintColor: Colors.$textDefaultLight,
      headerTitleStyle: {fontWeight: 'light'}
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={36} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={36} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
