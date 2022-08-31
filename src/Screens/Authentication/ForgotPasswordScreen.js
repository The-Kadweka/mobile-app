import { SafeAreaView,TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const ForgotPasswordScreen = () => {
  const navigation = useNavigation()

  return (
   <SafeAreaView style={styles.MainContainer}>
    <View style={styles.viewText}>
    <Text style={{color:'black',fontSize:20}}>Reset your password</Text>
    </View>
    <View style={styles.viewForm}>
    <Input placeholder='Email' />


   <View style={{flexDirection:"row",marginTop:15,justifyContent:"space-between"}}>
   <TouchableOpacity style={styles.submitButton1} onPress={()=>navigation.navigate("Login")}>
            <Text style={{color:'black',fontSize:20,fontWeight:'600'}}>Cancel</Text>
          </TouchableOpacity>
    <TouchableOpacity style={styles.submitButton}>
      <Text style={{color:'#FFFFFF',fontSize:20,fontWeight:'600'}}>Submit</Text>
    </TouchableOpacity>
   </View>
    </View>
   </SafeAreaView>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
  MainContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  
  viewForm:{
    width:'80%'
  },
  submitButton1:{
    height:40,
    backgroundColor:'white',
    borderWidth:1,
    borderColor:"#FF3278",
    borderRadius:10,
    width:"30%",
    justifyContent:'center',
    alignItems:'center',
  },
  submitButton:{
    height:40,
    backgroundColor:'#FF3278',
    borderRadius:10,
    width:"65%",
    justifyContent:'center',
    alignItems:'center',
    
  },
})