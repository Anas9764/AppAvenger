import { StyleSheet, Text, View } from "react-native";
import React from "react";

const History = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainCard}>
        <View>
          <Text style={styles.day}>Sat</Text>
          <Text style={styles.date}>4</Text>
        </View>

        <View style={styles.card}>
          <View>
            <Text style={styles.titles}>
              Abhishek scheduled a Meeting on 4 Saturday,2023.
            </Text>
            <Text>Click for Details</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginTop: 12,
    height: 80,
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  mainCard: {
    flex: 1,
    gap: 12,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    textAlign: "center",
  },
  day: {
    fontSize: 18,
    textAlign: "center",
    marginLeft: 10,
  },
  date: {
    fontSize: 22,
    fontWeight: "500",
    marginLeft: 10,
    textAlign: "center",
  },
  titles: {
    fontSize: 15.5,
    fontWeight: "500",
    marginBottom: 8,
  },
});
