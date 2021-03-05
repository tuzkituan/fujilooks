import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/pages/Home';
import SettingsPage from './src/pages/Settings';
import PresetDetailPage from './src/pages/PresetDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsPage}
        />
        <Stack.Screen
          name="Preset Details"
          component={PresetDetailPage}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
