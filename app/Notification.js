import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { router } from 'expo-router';

const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainCard}>
        <View style={styles.imgsection}>
          <Text style={styles.icon}>A</Text>
        </View>

        <View style={styles.detail}>
          <Text style={styles.nametitle}>Abhishek scheduled a Meeting</Text>
          <Text>25th December, 2023</Text>
          <View style={styles.btns}>
            <TouchableOpacity style={styles.btn1}>
              <Text style={{ color: "white",textAlign:"center" }}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
              <Text style={{ color: "white" ,textAlign:"center"}}  onPress={() =>
        router.replace("/History")}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginTop: 20,
    height: 120,
    flexDirection: "row",
    gap: 12,
  },
  mainCard: {
    flex: 1,
    gap: 12,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    textAlign: "center",
  },
  icon: {
    backgroundColor: "#d8a09f",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    padding:10,
    marginTop:10,
    marginLeft:10,
    borderRadius: 30, 
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  detail: {
    marginTop: 12,
  },
  nametitle: {
    fontSize: 20,
  },
  btns: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    marginTop: 10,
    marginBottom:10,
  },
  btn1: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 15,
    width:120,
    height:40
  },
  btn2: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 15,
    width:120,
    height:40
  },
});
