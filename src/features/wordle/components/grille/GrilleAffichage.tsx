import { useSelector } from "@/app/hooks";
import React from "react";
import { StyleSheet, View } from "react-native";
import { RowAffichage } from "./RowAffichage";

export const GrilleAffichage = () => {
  const { mots } = useSelector(state => state.wordle);

  return (
    <View style={styles.flexContainer}>
      {mots.map((mot: string, index: number) => {
        return (
          <RowAffichage key={index} lettres={mot.split("")} rowIndex={index} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
