import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../Screens/AccountScreen'
import MonthDataScreen from '../Screens/MonthDataScreen'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import TransactionScreen from '../Screens/TransactionScreen'
import React from 'react'
import StaticScreen from './StaticScreen';
import NewExpenseScreen from './RecordScreen/NewExpenseScreen';

const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
     <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarStyle:{
        height:50,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
      }
    }}>
      <Tab.Screen name="Transaction" component={TransactionScreen} 
      options={{
        tabBarLabel: () => null,
        tabBarIcon:()=>(
          <View>
<Ionicons name="home" size={30} color="#FF3278" />
          </View>
        )
      }}
      />
      <Tab.Screen name="Month Expenditure" component={MonthDataScreen} 
      options={{
        tabBarIcon:()=>(
          <View>
           <MaterialIcons name="money" size={22} color="#FF3278" />
          </View>
        )
      }}
      />
     <Tab.Screen name="add" component={NewExpenseScreen} 
      options={{
        tabBarLabel: () => null,
        tabBarIcon:()=>(
          <View style={{height:40,width:40,backgroundColor:'#FFFFFF',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
            <Entypo name="plus" size={22} color="#FF3278" />
          </View>
        )
      }}
      />
      <Tab.Screen name="Statics" component={StaticScreen} 
      options={{
        tabBarIcon:()=>(
          <View>
                        <Entypo name="bar-graph" size={22} color="#FF3278" />
          </View>
        )
      }}
      />
        <Tab.Screen name="Account" component={AccountScreen} 
      options={{
        tabBarIcon:()=>(
          <View>
                        <Ionicons name="md-person" size={22} color="#FF3278" />
          </View>
        )
      }}
      />
    </Tab.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})