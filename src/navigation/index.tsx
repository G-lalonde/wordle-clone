import { DetailsScreen, WordleScreen } from "@/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

export type RootStackParamList = {
  WordleRoute: undefined;
  Details: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Details"
        screenOptions={{ gestureEnabled: true }}>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="WordleRoute"
          component={WordleScreen}
          options={{ title: "Wordle" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
