import { useSelector } from "@/app/hooks";
import React from "react";
import { StyleSheet, View } from "react-native";
import { RowAffichage } from "./RowAffichage";

export const GrilleAffichage = () => {
  const { mot1, mot2, mot3, mot4, mot5 } = useSelector(state => state.wordle);

  return (
    <View style={styles.flexContainer}>
      <RowAffichage lettres={mot1} />
      <RowAffichage lettres={mot2} />
      <RowAffichage lettres={mot3} />
      <RowAffichage lettres={mot4} />
      <RowAffichage lettres={mot5} />
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "aliceblue",
  },
});
