import { FirstScreen, SecondScreen } from "@/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

export default function Navigation() {
  return (
    <NavigationContainer>
      <FirstScreen />
    </NavigationContainer>
  );
}
