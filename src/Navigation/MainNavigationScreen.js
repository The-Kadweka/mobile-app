import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen'
import React from 'react'
import DetailScreen from '../Screens/DetailScreens/DetailScreen';
import NewExpenseScreen from '../Screens/RecordScreen/NewExpenseScreen';
import DescriptionScreen from '../Screens/RecordScreen/DescriptionScreen';
import RegisterScreen from '../Screens/Authentication/RegisterScreen'
import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/Authentication/LoginScreen'
import ForgotPasswordScreen from '../Screens/Authentication/ForgotPasswordScreen'
import CategoryScreen from '../Screens/RecordScreen/CategoryScreen';
const Stack = createNativeStackNavigator();
const MainNavigationScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
      <Stack.Screen name='Register' component={RegisterScreen}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='Details' component={DetailScreen}/>
      <Stack.Screen name='NewExpense' component={NewExpenseScreen}/>
      <Stack.Screen name='CategoryScreen' component={CategoryScreen}/>
      <Stack.Screen name='DescriptionScreen' component={DescriptionScreen}/>
    </Stack.Navigator>
  )
}

export default MainNavigationScreen

const styles = StyleSheet.create({})