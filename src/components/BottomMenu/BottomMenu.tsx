import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { TabBar } from "./TabBar";
import { ReadingScreen } from "../../screens/ReadingScreen";
import { TrainingScreen } from "../../screens/TrainingScreen";
import { StudyScreen } from "../../screens/StudyScreen";
import { MeditateScreen } from "../../screens/MeditateScreen";
import { SleepScreen } from "../../screens/SleepScreen";
import { useSafeArea } from "react-native-safe-area-context";
import { View } from "react-native";


export const BottomMenu = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={{ flex: 1, position: "relative"}}>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      >
        <Tab.Screen name="md-book" component={ReadingScreen} />
        <Tab.Screen name="ios-fitness" component={TrainingScreen} />
        <Tab.Screen name="md-school" component={StudyScreen} />
        <Tab.Screen name="ios-radio-button-off" component={MeditateScreen} />
        <Tab.Screen name="ios-moon" component={SleepScreen} />
      </Tab.Navigator>
      {useSafeArea().bottom > 0 && (
        <View
          style={{
            height: useSafeArea().bottom - 5,
            backgroundColor: "white",
          }}
        />
      )}
    </View>
  );
};
