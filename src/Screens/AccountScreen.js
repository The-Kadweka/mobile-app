import { Image, SafeAreaView, StyleSheet, Text, View ,Dimensions, ScrollView, TouchableOpacity} from 'react-native'
import avata from '../../assets/avata.png'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'

const HEIGHT =Dimensions.get('window').height
const AccountScreen = () => {
  return (
   <SafeAreaView style={styles.Container}>
    <View style={styles.topSection}>
        <Text style={styles.topText}>Edit Account</Text>
    </View>
    <View style={styles.secondSection}>
        <Image source={avata} style={styles.avataImage}/>
    </View>
    <View style={styles.bottomSection}>
        <ScrollView>
            <View style={{left:10,marginTop:25}}>
                <Text  style={{color:'grey',fontSize:15}}>Full Names</Text>
               <TouchableOpacity onPress={()=>console.log("Testing the functionality")}>
               <Text style={{fontSize:15}}>Hussein Kadweka</Text>
               </TouchableOpacity>
            </View>

            <View style={{left:10,marginTop:25}}>
                <Text  style={{color:'grey',fontSize:15}}>Phone Number</Text>
               <TouchableOpacity onPress={()=>console.log("Testing the functionality")}>
               <Text style={{fontSize:15}}>+254110037818</Text>
               </TouchableOpacity>
            </View>

            <View style={{left:10,marginTop:25}}>
                <Text  style={{color:'grey',fontSize:15}}>Email</Text>
               <TouchableOpacity onPress={()=>console.log("Testing the functionality")}>
               <Text style={{fontSize:15}}>husseinkadweka@gmail.com</Text>
               </TouchableOpacity>
            </View>

            <View style={{left:10,marginTop:25}}>
                <Text  style={{color:'grey',fontSize:15}}>Password</Text>
               <TouchableOpacity onPress={()=>console.log("Testing the functionality")}>
               <Text style={{fontSize:15}}>**************</Text>
               </TouchableOpacity>
            </View>
            <View style={{left:10,marginTop:25}}>
                <Text  style={{color:'grey',fontSize:15}}>Password</Text>
               <TouchableOpacity onPress={()=>console.log("Testing the functionality")}>
               <Text style={{fontSize:15}}>**************</Text>
               </TouchableOpacity>
            </View>
            <View style={{left:10,marginTop:25}}>
               <TouchableOpacity onPress={()=>console.log("Testing the functionality")} style={{flexDirection:'row'}}>
               <Entypo name="share" size={24} color="black" />               
               <Text style={{fontSize:15,left:10}}>Invite A Friend</Text>
               </TouchableOpacity>
            </View>
            <View style={{left:10,marginTop:25}}>
               <TouchableOpacity onPress={()=>console.log("Testing the functionality")} style={{flexDirection:'row'}}>
               <MaterialCommunityIcons name="logout-variant" size={24} color="black" />
               <Text style={{fontSize:15,left:10}}>Sign Out</Text>
               </TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'grey'}}>V1.01.001</Text>
    </View>
        </ScrollView>
    </View>
   
   </SafeAreaView>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    Container:{
        backgroundColor:"black"
    },
    topSection:{
        height:"10%",
        justifyContent:'flex-start',
        flexDirection:'row',
        backgroundColor:'black'
    },
    topText:{
        color:'white',
        fontSize:25,
        left:10,
        top:30,
        fontWeight:'bold'
    },
    secondSection:{
        height:"25%",
        justifyContent:'flex-start',
        flexDirection:'row',
        backgroundColor:'yellow'
    },
    avataImage:{
        top:10,
        height:HEIGHT*0.2,
        width:150,
        borderRadius:100
    },
    bottomSection:{
        height:'70%',
        backgroundColor:'white'
    }
})