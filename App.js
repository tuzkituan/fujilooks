import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './src/pages/Home';
import SettingsPage from './src/pages/Settings';
import PresetDetailPage from './src/pages/PresetDetail';

import { Provider } from 'react-redux';
import { store } from './src/store';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
          tabBarOptions={{
            // showLabel: false,
            showIcon: true,
            activeBackgroundColor: '#000',
            inactiveBackgroundColor: '#000',
            activeTintColor: "teal"
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomePage}
            options={{
              tabBarLabel: 'Presets',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="camera-iris" color={color} size={size} />
              )
            }}
          />
          <Tab.Screen
            name="User Settings"
            component={SettingsPage}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-settings" color={color} size={size} />
              )
            }}
          />
          <Tab.Screen
            name="Preset Details"
            component={PresetDetailPage}
            options={{
              tabBarButton: () => null,
              tabBarVisible: false, // if you don't want to see the tab bar
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
