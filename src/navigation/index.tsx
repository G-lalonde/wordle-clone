import { FirstScreen, SecondScreen } from "@/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            // https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/FontAwesome5Free.json
            let iconName = "";

            switch (route.name) {
              case "First":
                iconName = "dumpster-fire";
                break;
              case "Second":
                iconName = "trash-alt";
                break;

              default:
                iconName = "calendar-check";
                break;
            }

            return (
              <Icon name={iconName} size={size} color={color} solid={focused} />
            );
          },
        })}>
        <Tab.Screen name="First" component={FirstScreen} />
        <Tab.Screen name="Second" component={SecondScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
