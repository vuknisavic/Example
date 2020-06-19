import React from "react";
import {
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import {BottomMenu} from "./src/components/BottomMenu/BottomMenu";
import { createStackNavigator } from '@react-navigation/stack';
import Player from "./src/screens/Player";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <SafeAreaProvider>
          <BottomMenu/>
      </SafeAreaProvider> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={BottomMenu} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
