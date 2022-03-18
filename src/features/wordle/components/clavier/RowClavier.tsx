import { useDispatch, useSelector } from "@/app/hooks";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  addAlmostLetter,
  addCorrectLetter,
  addWrongLetter,
  setWord,
  setWordIndex,
} from "../../actions/wordleActions";
import { LetterState } from "../grille/LettreAffichage";
import { BackButtonClavier } from "./BackButtonClavier";
import { EnterButtonClavier } from "./EnterButtonClavier";
import { LettreClavier } from "./LettreClavier";

interface RowClavierProps {
  lettres: string[];
  hasBackButton?: boolean;
  hasEnterButton?: boolean;
}

export const RowClavier = ({
  lettres,
  hasBackButton = false,
  hasEnterButton = false,
}: RowClavierProps) => {
  const { answer, mots, currentWordIndex } = useSelector(state => state.wordle);
  const dispatch = useDispatch();

  const onLetterClick = (lettre: string) => () => {
    if (currentWordIndex > 5) return;
    if (mots[currentWordIndex].length < 5) {
      const updatedWord = mots[currentWordIndex] + lettre;
      dispatch(setWord(updatedWord));
    }
  };

  const onBackButtonClick = () => {
    if (currentWordIndex > 5) return;
    if (mots[currentWordIndex].length >= 1) {
      const updatedWord = mots[currentWordIndex].slice(0, -1);
      dispatch(setWord(updatedWord));
    }
  };

  const onEnterClick = () => {
    if (currentWordIndex > 5) return;
    if (mots[currentWordIndex].length < 5) return;

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

    dispatch(setWordIndex(currentWordIndex + 1));
  };

  return (
    <View style={styles.flexContainer}>
      {hasEnterButton && <EnterButtonClavier onLetterClick={onEnterClick} />}
      {lettres.map((lettre, index) => {
        return (
          <LettreClavier
            key={lettre}
            lettre={lettre}
            onLetterClick={onLetterClick(lettre)}
          />
        );
      })}
      {hasBackButton && <BackButtonClavier onLetterClick={onBackButtonClick} />}
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
  },
});
