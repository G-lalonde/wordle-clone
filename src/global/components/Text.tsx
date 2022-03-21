import React from "react";
import { TextProps, TextStyle } from "react-native";
import { Text as DefaultText } from "react-native";

export const Text = (props: TextProps) => {
  const { style, ...otherProps } = props;
  const textStyle = style as TextStyle;
  let fontFamily = "open_sans";

  if (textStyle.fontWeight !== undefined) {
    switch (textStyle.fontWeight) {
      case "bold":
      case "700":
        fontFamily = "open_sans_bold";
        break;

      case "600":
        fontFamily = "open_sans_semi_bold";
        break;

      default:
        fontFamily = "open_sans";

        break;
    }
  }

  return <DefaultText style={[style, { fontFamily }]} {...otherProps} />;
};
