import { store } from "@/app/store";
import { fireEvent, render, shallow } from "@/test-utils";
import React from "react";
import { ADD_COUNTER, REMOVE_COUNTER } from "../../actions/counterActionsTypes";
import Base from "../Base";

// https://testing-library.com/docs/react-native-testing-library/example-intro
// https://jestjs.io/fr/docs/snapshot-testing

const dispatch = jest.spyOn(store, "dispatch");

describe("<Base />", () => {
  it("renders correctly", () => {
    const tree = render(<Base />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("Testing disptached actions", () => {
  it("clic increment disptach ADD_COUNTER action", () => {
    const { getByTestId } = render(<Base />);

    const button = getByTestId("increment-button");
    fireEvent.press(button);

    expect(dispatch).toHaveBeenCalledWith({
      type: ADD_COUNTER,
      payload: 10,
    });
  });

  it("clic decrement disptach REMOVE_COUNTER action", () => {
    const { getByTestId } = render(<Base />);

    const button = getByTestId("decrement-button");
    fireEvent.press(button);

    expect(dispatch).toHaveBeenCalledWith({
      type: REMOVE_COUNTER,
      payload: 2,
    });
  });
});
