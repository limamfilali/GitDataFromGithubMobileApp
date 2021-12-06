import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserScreen from "./src/screens/UserScreen";
import RepoScreen from "./src/screens/RepoScreen";
import Home from "./src/screens/Home";

const HomeStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="User" component={UserScreen} />
        <HomeStack.Screen name="Repo" component={RepoScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
