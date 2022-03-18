import { Text } from "@/global";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface EnterButtonClavierProps {
  onLetterClick: () => void;
}

export const EnterButtonClavier = ({
  onLetterClick,
}: EnterButtonClavierProps) => {
  return (
    <TouchableOpacity onPress={onLetterClick}>
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
