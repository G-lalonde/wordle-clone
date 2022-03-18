import { ROW_COUT } from "@/app/constants";
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
import { BackButtonClavier } from "./BackButtonClavier";
import { EnterButtonClavier } from "./EnterButtonClavier";
import { LettreClavier } from "./LettreClavier";

interface RowClavierProps {
  lettres: string[];
  hasBackButton?: boolean;
  onEnterClick?: () => void;
  hasEnterButton?: boolean;
}

export const RowClavier = ({
  lettres,
  hasBackButton = false,
  hasEnterButton = false,
}: RowClavierProps) => {
  return (
    <View style={styles.flexContainer}>
      {hasEnterButton && <EnterButtonClavier />}
      {lettres.map((lettre, index) => {
        return <LettreClavier key={lettre} lettre={lettre} />;
      })}
      {hasBackButton && <BackButtonClavier />}
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
