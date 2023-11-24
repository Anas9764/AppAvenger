import React from 'react';
import { Stack } from 'expo-router';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: 'orange',
        // },
        // headerTintColor: 'white',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },
       
      }}
    >
    <Stack.Screen name='Login' options={{headerShown:false}}/>
    <Stack.Screen name='Home' options={{headerShown:false}}/>
    
    <Stack.Screen name='Notification' screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>

</Stack>
  );
}
