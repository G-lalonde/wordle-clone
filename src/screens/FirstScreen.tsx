import React from "react";

import { GrilleAffichage } from "@/features/wordle/components/grille/GrilleAffichage";
import { View, StyleSheet } from "react-native";
import { Clavier } from "@/features/wordle/components/clavier/Clavier";
import { SafeAreaView } from "react-native-safe-area-context";

export function FirstScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <GrilleAffichage />
      <Clavier />
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