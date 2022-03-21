import { ANSWERS, ANSWER_OFFSET } from "@/app/constants";
import { useDispatch, useSelector } from "@/app/hooks";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { resetAttempt, setAnswer } from "../../actions/wordleActions";

export const Details = () => {
  const { answer, numberOfTries } = useSelector(state => state.wordle);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const now = new Date();
    const daysSinceEpoch = Math.floor(now.getTime() / 8.64e7);
    const currentAnswer = ANSWERS[daysSinceEpoch - ANSWER_OFFSET];

    if (currentAnswer !== answer) {
      dispatch(setAnswer(currentAnswer));
      dispatch(resetAttempt());
    }
  }, []);

  const handleReset = () => {
    dispatch(resetAttempt());
  };

  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItem}>
        <Text style={styles.title_info_text}>answer : </Text>
        <Text style={styles.text}>{answer}</Text>
      </View>

      <View style={styles.flexItem}>
        <Text style={styles.title_info_text}>Number of tries : </Text>
        <Text style={styles.text}>{numberOfTries}</Text>
        <Button title="Retry" onPress={handleReset}></Button>
      </View>

      <View style={styles.flexItem}>
        <TouchableOpacity onPress={() => navigation.navigate("WordleRoute")}>
          <View style={styles.textBox}>
            <Text style={styles.textBoxText}>Play</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  flexItem: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 45,
    fontFamily: "open_sans_bold",
    textTransform: "uppercase",
  },
  title_info_text: {
    fontSize: 20,
    fontFamily: "open_sans",
    textTransform: "uppercase",
  },
  textBoxText: {
    fontSize: 35,
    fontFamily: "open_sans_bold",
    textTransform: "uppercase",
    color: "white",
  },
  textBox: {
    height: 60,
    backgroundColor: "rgb(106, 170, 100)",
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 20,
  },
});
