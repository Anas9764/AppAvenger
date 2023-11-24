import { StyleSheet, Text, View } from "react-native";
import { router } from 'expo-router';

import React from "react";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="funnel-outline" size={24} color="black" />
        <Text style={styles.title}>Home</Text>
        <View style={styles.iconContainer}>
          <Feather name="bell" size={24} color="black" />
          <FontAwesome5 name="bars" size={24} color="black" />
        </View>
      </View>

      <View style={styles.main}>
        <Text style={styles.heading}><Text style={{fontSize:50,color:"blue"}}>|</Text>Upcoming</Text>

        <View style={styles.upcomingSection}>
          <View>
            <Text style={styles.day}>Fri</Text>
            <Text style={styles.date}>3</Text>
          </View>

          <View style={styles.card}>
            <View>
              <Text style={styles.eventTitle}>Meeting for Business</Text>
              <Text>7:35 - 8:30 pm</Text>
            </View>

            <View style={styles.users}>
              <Text style={styles.userCount}>2</Text>
              <FontAwesome name="user-o" size={24} color="blue" />
            </View>
          </View>
        </View>

        <View style={styles.upcomingSection}>
          <View>
            <Text style={styles.day}>Sat</Text>
            <Text style={{fontSize:30,textAlign:"center"}}>4</Text>
          </View>

          <View style={styles.card}>
            <View>
              <Text style={styles.eventTitle}>Family Night Plan</Text>
              <Text>9:00 - 8:30 pm</Text>
            </View>

            <View style={styles.users}>
              <Text style={styles.userCount}>4</Text>
              <FontAwesome name="user-o" size={24} color="blue" />
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.plusIcon} onPress={() =>
        router.replace("/Login")}>+</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9E4F0",
    padding: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 12,
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 19,
  },
  main: {
    marginTop: 12,
  },
  heading: {
    fontSize: 35,
    fontWeight: "500",
  },
  upcomingSection: {
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
    marginLeft: 12,
  },
  day: {
    fontSize: 18,
    textAlign: "center",
  },
  date: {
    backgroundColor: "blue",
    color: "white",
    justifyContent: "center",
    width: 32,
    flex: 1,
    alignContent: "center",
    padding: 2,
    borderRadius: 25,
    height: 35,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
  },
  card: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    height: 65,
    padding: 8,
    textAlign: "center",
  },
  eventTitle: {
    fontSize: 22,
  },
  users: {
    flexDirection: "row-reverse",
    gap: 4,
    marginTop: 10,
  },
  userCount: {
    fontSize: 20,
    color: "blue",
  },
  plusIcon: {
    fontSize: 60,
    width: 80,
    height: 80,
    borderRadius: 40,
    position: "relative",
    left: 310,
    top: 400,
    color: "white",
    textAlign: "center",
    backgroundColor: "blue",
  },
});
