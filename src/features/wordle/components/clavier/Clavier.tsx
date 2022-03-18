import { ROW_COUT } from "@/app/constants";
import { useDispatch, useSelector } from "@/app/hooks";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  setWord,
  addCorrectLetter,
  addAlmostLetter,
  addWrongLetter,
  setWordIndex,
} from "../../actions/wordleActions";
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
