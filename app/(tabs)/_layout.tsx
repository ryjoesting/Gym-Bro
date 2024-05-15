import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Colors, Typography } from 'react-native-ui-lib';

export default function TabLayout() {

  // Change this to adjust icon size of tab bar
  const iconSize = 42;

  return (
    // Sets up Tab Navigator. Use screen options to adjust.
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: Colors.$iconPrimary, 
      headerStyle: {backgroundColor: Colors.$backgroundPrimaryHeavy},
      headerTintColor: Colors.$textDefaultLight,
      headerTitleStyle: {fontWeight: 'light'},
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={iconSize} name="home" color={color} />,
          tabBarShowLabel: false,
          headerShown: false, // Hides just the Home Tab header (implementing our own through home tab's stack _layout.tsx)
        }}
        
      />
      <Tabs.Screen
        name="data"
        options={{
          title: 'Data',
          tabBarIcon: ({ color }) => <FontAwesome size={iconSize} name="line-chart" color={color} />,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={iconSize} name="cog" color={color} />,
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
    // Each of the tab screens corresponds to the appropriate .tsx file in the file structure.
  );
}
