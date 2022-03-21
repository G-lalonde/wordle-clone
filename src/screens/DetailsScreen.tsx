import { Details } from "@/features/wordle/components/details/Details";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function DetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Details />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
