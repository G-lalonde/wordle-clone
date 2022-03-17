import React from "react";
import { TextProps, TextStyle } from "react-native";
import { Text as DefaultText } from "react-native";

export const Text = (props: TextProps) => {
  const { style, ...otherProps } = props;
  const textStyle = style as TextStyle;
  let fontFamily = "mulish";

  switch (textStyle.fontWeight) {
    case "bold":
    case "700":
      fontFamily = "mulish_bold";
      break;

    case "600":
      fontFamily = "mulish_semi_bold";
      break;

    default:
      fontFamily = "mulish";

      break;
  }

  return <DefaultText style={[style, { fontFamily }]} {...otherProps} />;
};
