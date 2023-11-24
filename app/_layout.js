import React from 'react';
import { Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
  const backButton = (navigation) => (
    <TouchableOpacity
      style={{ paddingLeft: 10 }}
      onPress={() => navigation.navigate('Home')}
    >
      <FontAwesome name="arrow-left" size={24} color="black" />
    </TouchableOpacity>
  );

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name='Login' options={{ headerShown: false }} />
      <Stack.Screen name='Home' options={{ headerShown: false }} />
    
      <Stack.Screen
        name='Notification'
        options={({ navigation }) => ({
          headerLeft: () => backButton(navigation),
        })}
      />

      <Stack.Screen
        name='History'
        options={({ navigation }) => ({
          headerLeft: () => backButton(navigation),
        })}
      />
    </Stack>
  );
}
