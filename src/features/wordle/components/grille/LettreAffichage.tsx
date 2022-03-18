import React from "react";
import { StyleSheet, View, Text } from "react-native";

export enum LetterState {
  empty,
  wrong,
  correct,
  move,
}

interface LettreAffichageProps {
  lettre: string;
  state: LetterState;
}

export const LettreAffichage = ({
  lettre,
  state = LetterState.empty,
}: LettreAffichageProps) => {
  return (
    <View style={[styles.box, { backgroundColor: selectColor(state) }]}>
      <Text
        style={[
          styles.text,
          {
            color: state == LetterState.empty ? "black" : "white",
          },
        ]}>
        {lettre}
      </Text>
    </View>
  );
};

const selectColor = (state: LetterState = LetterState.empty) => {
  let backgroundColor;
  switch (state) {
    case LetterState.wrong:
      backgroundColor = "rgb(120, 124, 126)";
      break;
    case LetterState.correct:
      backgroundColor = "rgb(106, 170, 100)";
      break;
    case LetterState.move:
      backgroundColor = "rgb(201, 180, 88)";
      break;
    default:
      backgroundColor = "transparent";
      break;
  }
  return backgroundColor;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    textTransform: "uppercase",
    fontFamily: "open_sans_bold",
  },
  box: {
    width: 62,
    height: 62,
    marginHorizontal: 2.5,
    backgroundColor: "transparent",
    borderColor: "lightgray",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
