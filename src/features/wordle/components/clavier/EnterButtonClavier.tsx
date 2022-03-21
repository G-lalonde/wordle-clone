import { ROW_COUT } from "@/app/constants";
import { useDispatch, useSelector } from "@/app/hooks";
import { Text } from "@/global";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  addCorrectLetter,
  addAlmostLetter,
  addWrongLetter,
  setWordIndex,
  setHasWon,
} from "../../actions/wordleActions";

export const EnterButtonClavier = () => {
  const { answer, mots, currentWordIndex, hasWon } = useSelector(
    state => state.wordle,
  );
  const dispatch = useDispatch();

  const onEnterClick = () => {
    if (
      hasWon ||
      mots[currentWordIndex].length < ROW_COUT - 1 ||
      currentWordIndex >= ROW_COUT
    )
      return;

    const triedWord = mots[currentWordIndex];
    triedWord.split("").forEach((letter: string, index: number) => {
      if (answer[index] == letter) {
        dispatch(addCorrectLetter(letter));
      } else if (answer.includes(letter)) {
        dispatch(addAlmostLetter(letter));
      } else {
        dispatch(addWrongLetter(letter));
      }
    });

    if (mots[currentWordIndex] == answer) {
      dispatch(setHasWon(true));
    }

    dispatch(setWordIndex(currentWordIndex + 1));
  };

  return (
    <TouchableOpacity onPress={onEnterClick}>
      <View style={styles.box}>
        <Text style={styles.text}>{"enter"}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    textTransform: "uppercase",
    fontWeight: "700",
  },
  box: {
    width: 52,
    height: 50,
    marginHorizontal: 2.5,
    borderColor: "lightgray",
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(211, 214, 218)",
  },
});
