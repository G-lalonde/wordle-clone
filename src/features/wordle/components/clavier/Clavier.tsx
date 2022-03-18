import React from "react";
import { StyleSheet, View } from "react-native";
import { BackButtonClavier } from "./BackButtonClavier";
import { RowClavier } from "./RowClavier";

export const Clavier = () => {
  return (
    <View style={styles.flexContainer}>
      <RowClavier lettres={"qwertyuiop".split("")} />
      <RowClavier lettres={"asdfghjkl".split("")} />
      <RowClavier lettres={"zxcvbnm".split("")} hasBackButton hasEnterButton />
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    // bottom: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
