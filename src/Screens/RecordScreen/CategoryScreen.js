import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import React from 'react'

const CategoryScreen = () => {
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
      <View style={{flexDirection:'row',justifyContent:'space-between',left:20,marginTop:30,width:'95%'}}>
       <View style={{width:'80%'}}>
       <Input placeholder='Description'/>
       </View>
        <TouchableOpacity style={{width:40,height:35,backgroundColor:'red',justifyContent:'center',borderRadius:10,width:'10%',right:25}} onPress={()=>navigation.navigate('CategoryScreen')}>
        <Feather name="arrow-right" size={30} color="white" />
                </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default CategoryScreen

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