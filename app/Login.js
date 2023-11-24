import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import {Link, Redirect,router} from 'expo-router'
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState();

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Phone Number:', phoneNumber);
    console.log('OTP:', otp);
    // Add logic for authentication
  };

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={require('./assets/loginlogo.jpeg')} // Replace with your image URL
        style={styles.image}
      />

      {/* Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />

      {/* OTP Input */}
      <TextInput
        style={styles.input}
        placeholder="OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={(text) => setOtp(text)}
      />

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() =>
        router.replace("/Home")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    gap:20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  input: {
    height: 60,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 15,
  },
  buttonContainer: {
    width: '100%',
    height:50,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 15, // Adjusted to match the input field
    width: '100%', // Same width as input
    height:60,

  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    // paddingTop:1,
    fontSize:30,
    fontWeight: 'bold',
    // justifyContent: 'center',
    // flex:1
  },
});
