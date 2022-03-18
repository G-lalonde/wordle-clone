import { ROW_COUT } from "@/app/constants";
import { useDispatch, useSelector } from "@/app/hooks";
import { Text } from "@/global";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { setWord } from "../../actions/wordleActions";

interface LettreClavierProps {
  lettre: string;
}

export const LettreClavier = ({ lettre }: LettreClavierProps) => {
  const {
    almostCorrectLetters,
    correctLetters,
    wrongLetters,
    mots,
    hasWon,
    currentWordIndex,
  } = useSelector(state => state.wordle);

  const dispatch = useDispatch();

  const onLetterClick = () => {
    if (hasWon || currentWordIndex >= ROW_COUT) return;
    if (mots[currentWordIndex].length < ROW_COUT - 1) {
      const updatedWord = mots[currentWordIndex] + lettre;
      dispatch(setWord(updatedWord));
    }
  };

  return (
    <TouchableOpacity onPress={onLetterClick}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: selectColor(
              lettre,
              almostCorrectLetters,
              correctLetters,
              wrongLetters,
            ),
          },
        ]}>
        <Text style={styles.text}>{lettre}</Text>
      </View>
    </TouchableOpacity>
  );
};

const selectColor = (
  letter: string,
  almostCorrectLetters: string[],
  correctLetters: string[],
  wrongLetters: string[],
) => {
  let backgroundColor;
  if (correctLetters.includes(letter)) {
    backgroundColor = "rgb(106, 170, 100)";
  } else if (almostCorrectLetters.includes(letter)) {
    backgroundColor = "rgb(201, 180, 88)";
  } else if (wrongLetters.includes(letter)) {
    backgroundColor = "rgb(120, 124, 126)";
  } else {
    backgroundColor = "rgb(211, 214, 218)";
  }
  return backgroundColor;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    textTransform: "uppercase",
    fontWeight: "700",
  },
  box: {
    width: 32,
    height: 58,
    marginHorizontal: 2.5,
    backgroundColor: "transparent",
    borderColor: "lightgray",
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
