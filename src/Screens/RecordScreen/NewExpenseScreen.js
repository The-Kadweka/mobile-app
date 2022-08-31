import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React from 'react'

const NewExpenseScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{width:'100%'}}>
       <View style={styles.viewHeader}>
       <TouchableOpacity>
       <View style={styles.viewCancel}>
        <Feather name="x" size={24} color="black" />
        </View>
       </TouchableOpacity>
          <Text style={{fontSize:25,fontWeight:'600',color:'#444444'}}>Add Transaction</Text>
        </View>
      <View>
       
      <View style={{marginTop:20,width:'90%',left:20}}>
        <Text style={{color:'#444444',fontSize:25,fontWeight:'600'}}>What kind of{'\n'} transaction is it ?</Text>

        <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between'}}>
          <TouchableOpacity style={styles.viewCard} onPress={()=>navigation.replace('DescriptionScreen')}>
            <View style={styles.viewBox}>
            <AntDesign name="arrowdown" size={24} color="#FFFFFF" />
            </View>

            <Text style={{fontSize:20,fontWeight:'600',color:'#6B6B6B',marginTop:50,left:10}}>Income</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.viewCard} onPress={()=>navigation.replace('DescriptionScreen')}>
            <View style={styles.viewBox1}>
            <AntDesign name="arrowup" size={24} color="#FFFFFF" />

            </View>

            <Text style={{fontSize:20,fontWeight:'600',color:'#6B6B6B',marginTop:50,left:10}}>Expense</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default NewExpenseScreen

const styles = StyleSheet.create({
  viewHeader:{
    height:120,
    top:0,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    backgroundColor:'#FFFFFF',
    width:'100%'
  },
  viewCancel:{
    height:40,
    width:40,
    borderRadius:10,
    backgroundColor:'#FFFFFF',
    justifyContent:'center',
    alignItems:'center',
    right:20
  },
  viewCard:{
    height:150,
    width:150,
    borderRadius:20,
    backgroundColor:'#FFFFFF'
  },
  viewBox:{
    backgroundColor:'#21BF86',
    height:50,
    width:50,
    left:10,
    justifyContent:'center',
    alignItems:'center',
    top:20,
    borderRadius:10
  },
  viewBox1:{
    backgroundColor:'#E24134',
    height:50,
    width:50,
    left:10,
    justifyContent:'center',
    alignItems:'center',
    top:20,
    borderRadius:10
  }
})