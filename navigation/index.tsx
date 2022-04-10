/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "native-base";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ExploreScreen from "../screens/ExploreScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

const CustomButton = ({ children, onPress }) => (
  <Pressable
    style={{
      top: -20,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View w="10" h="10" borderRadius={"full"} bg="indigo.500">
      {children}
    </View>
  </Pressable>
);

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#5669FF",
        tabBarInactiveTintColor: "#999",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass-outline" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Events"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" color={color} size={25} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="plus" color={"white"} size={25} />
          ),
          tabBarButton: (props) => (
            <CustomButton children={props.children} onPress={props.onPress} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="location-sharp" color={color} size={25} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={25} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
