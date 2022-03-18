import { ROW_COUT } from "@/app/constants";
import { useDispatch, useSelector } from "@/app/hooks";
import { Text } from "@/global";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { setWord } from "../../actions/wordleActions";

export const BackButtonClavier = () => {
  const { mots, currentWordIndex, hasWon } = useSelector(state => state.wordle);
  const dispatch = useDispatch();

  const onBackButtonClick = () => {
    if (hasWon || currentWordIndex >= ROW_COUT) return;

    if (currentWordIndex >= ROW_COUT) return;
    if (mots[currentWordIndex].length >= 1) {
      const updatedWord = mots[currentWordIndex].slice(0, -1);
      dispatch(setWord(updatedWord));
    }
  };

  return (
    <TouchableOpacity onPress={onBackButtonClick}>
      <View style={styles.box}>
        <Text style={styles.text}>
          <FontAwesome5 name={"backspace"} size={16} />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "700",
  },
  box: {
    width: 52,
    height: 58,
    marginHorizontal: 2.5,
    borderColor: "lightgray",
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(211, 214, 218)",
  },
});
