import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const RegisterScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.MainCotainer}>
      <View style={styles.viewContainer}>
        <View style={styles.viewWelcomeText}>
          <Text style={{ color: '#444444', fontSize: 25, fontStyle: 'normal', lineHeight: 29, fontWeight: '600' }}>Create your account</Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ color: '#FFFFF' }}>Continue with</Text>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <View style={styles.googleView}>
              <SimpleLineIcons name="social-google" size={20} color="#E24134" />
            </View>
            <View style={styles.facebookView}>
              <Feather name="facebook" size={20} color="#166FD8" />
            </View>
          </View>
        </View>
        <Text style={{ marginTop: 20, color: '#FFFFF' }}>OR</Text>

        <ScrollView>
          <View style={styles.formView}>
            <KeyboardAvoidingView enabled>
              <View style={{width:'80%'}}>
              <Input placeholder='Full name' />
              <Input placeholder='Email' secureTextEntry/>
              <Input placeholder='Phone number' secureTextEntry/>
              <Input placeholder='Password' secureTextEntry/>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={{color:'#FFFFFF'}}>Create account</Text>
          </TouchableOpacity>
          <View style={styles.viewSignUp}>
            <Text>Already have an account ?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text style={{color:'#FF3278',left:5}}>Sign in</Text>
            </TouchableOpacity>
          </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  MainCotainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  viewContainer: {
    height: '100%',
    width: '100%',
    left: 50
  },
  viewWelcomeText: {
    marginTop: 80,
  },
  googleView: {
    height: 40,
    width: 40,
    borderRadius: 5,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E24134'
  },
  facebookView: {
    marginLeft: 30,
    height: 40,
    width: 40,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#166FD8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButton:{
    height:40,
    backgroundColor:'#FF3278',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  },
  viewSignUp:{
    flexDirection:'row',
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'
  }
})