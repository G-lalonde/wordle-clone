import { ROW_COUT } from "@/app/constants";
import { useDispatch, useSelector } from "@/app/hooks";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
            backgroundColor: selectBgColor(
              lettre,
              almostCorrectLetters,
              correctLetters,
              wrongLetters,
            ),
          },
        ]}>
        <Text
          style={[
            styles.text,
            {
              color: selectLetterColor(
                lettre,
                almostCorrectLetters,
                correctLetters,
                wrongLetters,
              ),
            },
          ]}>
          {lettre}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const selectBgColor = (
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

const selectLetterColor = (
  letter: string,
  almostCorrectLetters: string[],
  correctLetters: string[],
  wrongLetters: string[],
) => {
  let backgroundColor;
  if (
    correctLetters.includes(letter) ||
    almostCorrectLetters.includes(letter) ||
    wrongLetters.includes(letter)
  ) {
    backgroundColor = "white";
  } else {
    backgroundColor = "black";
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
    height: 50,
    marginHorizontal: 2.5,
    backgroundColor: "transparent",
    borderColor: "lightgray",
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
