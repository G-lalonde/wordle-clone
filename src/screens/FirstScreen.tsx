import { useSelector } from "@/app/hooks";
import { Clavier } from "@/features/wordle/components/clavier/Clavier";
import { GrilleAffichage } from "@/features/wordle/components/grille/GrilleAffichage";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@/global";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast, {
  BaseToast,
  ErrorToast,
  ToastConfig,
} from "react-native-toast-message";
import { ROW_COUT } from "@/app/constants";

export function FirstScreen() {
  const { answer, mots, currentWordIndex } = useSelector(state => state.wordle);

  useEffect(() => {
    const hasWon = mots[Math.max(currentWordIndex - 1, 0)] === answer;
    if (currentWordIndex >= ROW_COUT) {
      Toast.show({
        type: "default",
        props: { answer },
      });
    } else if (hasWon) {
      Toast.show({
        type: "default",
        props: { answer: "bravo" },
      });
    }

    return;
  }, [currentWordIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <GrilleAffichage />
      <Clavier />
      <Toast config={toastConfig} />
    </SafeAreaView>
  );
}

const toastConfig: ToastConfig = {
  default: ({ props }) => (
    <View
      style={{
        height: 60,
        backgroundColor: "black",
        borderRadius: 10,
        justifyContent: "center",
        alignContent: "center",
        paddingHorizontal: 20,
      }}>
      <Text
        style={{
          color: "white",
          textTransform: "uppercase",
          fontWeight: "700",
        }}>
        {props.answer}
      </Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
