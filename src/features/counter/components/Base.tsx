import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "@/app/hooks";
import { add, fetchAsync, remove } from "../actions/counterActions";

const Base = () => {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(add(1));
  };

  const decrementHandler = () => {
    dispatch(remove(1));
  };

  const fetchHandler = () => {
    dispatch(fetchAsync());
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterView}>
        <Text style={styles.count}>Counter</Text>
        <Text style={styles.count}>{count}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            testID="decrement-button"
            title="-"
            onPress={decrementHandler}
          />
        </View>
        <View style={styles.button}>
          <Button
            testID="increment-button"
            title="+"
            onPress={incrementHandler}
          />
        </View>
      </View>
      <Button testID="increment-button" title="fetch" onPress={fetchHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    fontSize: 20,
  },
  counterView: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    fontSize: 16,
    width: "20%",
    marginHorizontal: 10,
    marginTop: 20,
  },
});

export default Base;
