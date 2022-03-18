import { Text } from "@/global";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

interface BackButtonClavierProps {
  onLetterClick: () => void;
}

export const BackButtonClavier = ({
  onLetterClick,
}: BackButtonClavierProps) => {
  return (
    <TouchableOpacity onPress={onLetterClick}>
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
