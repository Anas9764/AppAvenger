import React from 'react';
import { Stack } from 'expo-router';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
    <Stack.Screen name='Login' options={{headerShown:false}}/>
    <Stack.Screen name='Home'/>

</Stack>
  );
}
