import { useSelector } from "@/app/hooks";
import React from "react";
import { StyleSheet, View } from "react-native";
import { LetterState, LettreAffichage } from "./LettreAffichage";

interface RowAffichageProps {
  lettres: string[];
}

export const RowAffichage = ({ lettres }: RowAffichageProps) => {
  const { answer } = useSelector(state => state.wordle);

  const lettre1 = lettres[0];
  const lettre2 = lettres[1];
  const lettre3 = lettres[2];
  const lettre4 = lettres[3];
  const lettre5 = lettres[4];

  return (
    <View style={styles.flexContainer}>
      <LettreAffichage
        lettre={lettre1}
        state={getLetterState(lettre1, 0, answer)}
      />
      <LettreAffichage
        lettre={lettre2}
        state={getLetterState(lettre2, 1, answer)}
      />
      <LettreAffichage
        lettre={lettre3}
        state={getLetterState(lettre3, 2, answer)}
      />
      <LettreAffichage
        lettre={lettre4}
        state={getLetterState(lettre4, 3, answer)}
      />
      <LettreAffichage
        lettre={lettre5}
        state={getLetterState(lettre5, 4, answer)}
      />
    </View>
  );
};

const getLetterState = (
  letter: string,
  letterIndex: number,
  answer: string,
) => {
  let state = LetterState.empty;

  if (!letter) {
    state = LetterState.empty;
  } else if (answer[letterIndex] === letter) {
    state = LetterState.correct;
  } else if (answer.includes(letter)) {
    state = LetterState.move;
  } else if (!answer.includes(letter)) {
    state = LetterState.wrong;
  }

  return state;
};

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
  },
});
