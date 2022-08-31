import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity,Dimensions, View } from 'react-native'
import welcome from '../../assets/catImages/welcome.png'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

const height=Dimensions.get('window').height
const WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.MainContainer}>
        <View style={styles.topSection}>
            <View style={{marginTop:'22%',left:20}}>
            <View style={styles.welcomeTop}>
            <Text style={styles.welcomeText}>Welcome!</Text>
            </View>
            <View welcomeBottom>
            <Text style={styles.fText}>Log in to get{'\n'}
          started...</Text>
            </View>
            </View>
        </View>

        <View style={styles.middleSection}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Image source={welcome} style={{width:350,height:200}}/>
            </View>
        </View>

            <View  style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
             <View style={styles.buttonView}>
             <TouchableOpacity style={{flexDirection:'row'}}>
             <FontAwesome5 name="facebook-f" size={20} color="black"  style={{marginRight:10}}/>
               <Text style={{fontSize:20}}>Connect with Facebook</Text>
              </TouchableOpacity>
             </View>
             <View style={styles.buttonView}>
             <TouchableOpacity style={{flexDirection:'row'}}>
             <AntDesign name="google" size={20} color="black" style={{marginRight:10}}/>
               <Text style={{fontSize:20}}>Connect with Google</Text>
              </TouchableOpacity>
             </View>
              <Text style={{fontSize:25}}>or</Text>

              <View style={styles.buttonView1}>
             <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('Login')}>
               <Text style={{fontSize:25}}>Log in with your Email</Text>
              </TouchableOpacity>
             </View>
              <View>
                <Text>Don't have an account? 
                  <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                    <Text>Sign up</Text>
                  </TouchableOpacity>
                </Text>
              </View>
        </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    MainContainer:{
        height:'100%',
        width:'100%',
        backgroundColor:'#ffd300'
    },
    topSection:{
      height:'30%',
    },
    welcomeText:{
      fontSize:height*0.030,
      fontWeight:'bold',
      color:'grey'
    },
    fText:{
      fontSize:height*0.055,

    },
    bottomSection:{
      justifyContent:'center',
      width:'100%',
      alignSelf:'center'
    },
    buttonView:{
      backgroundColor:'yellow',
      height:50,
      width:'90%',
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:10
    },
    buttonView1:{
      height:50,
      borderWidth:1,
      borderColor:'yellow',
      width:'90%',
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:10
    }
})