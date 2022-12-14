import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import WelcomeActivity from "./screens/WelcomeActivity.js"
import SignInActivity from "./screens/signInActivity.js"
import HomeActivity from "./screens/homeActivity"

let stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light"/>
      <stack.Navigator
        screenOptions = {{header:()=> null}}
      >
        <stack.Screen 
        name ="Welcome Activity"
        component = {WelcomeActivity}
        />
        <stack.Screen
        name="Sign In"
        component = {SignInActivity}/>
        <stack.Screen
        name = "Home"
        component={HomeActivity}/>

      </stack.Navigator>
    </NavigationContainer>
     
  );

}

