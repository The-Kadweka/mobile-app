import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

const TransactionScreen = () => {
  return (
    <SafeAreaView>
      <View style={{marginLeft:20,width:'90%',height:"100%"}}>
      <View style={styles.headerText}>
        <Text style={{color:"#FF3278",fontSize:18}}>Welcome back</Text>
        <Text style={{color:"black",fontSize:25,fontWeight:'bold'}}>Hussein !!</Text>
      </View>


      <View style={styles.topCard}>
        <View style={{left:10,top:10,borderRadius:10,height:40,width:40,backgroundColor:'#21BF86',justifyContent:'center',alignItems:'center'}}>
        <FontAwesome5 name="credit-card" size={24} color="#FFFFFF" />
        </View>
        <View style={{marginTop:20,left:10}}>
          <Text style={{color:'#6B6B6B',marginBottom:5}}>Net Balance</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={{color:"#6B6B6B",marginTop:7}}>Ksh</Text>
          <Text style={{color:"#444444",fontSize:23,fontWeight:'600',left:2.5}}>46500</Text>
          </View>
        </View>
        </View>

        <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginTop:25}}>
          <View style={styles.viewRawCard}>
          <View style={{left:10,top:10,borderRadius:10,height:40,width:40,backgroundColor:'#21BF86',justifyContent:'center',alignItems:'center'}}>
        <AntDesign name="arrowdown" size={24} color="#FFFFFF" />
        </View>
        <View style={{marginTop:40,left:5}}>
          <Text style={{color:'#6B6B6B',marginBottom:5}}>Income</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={{color:"#6B6B6B",marginTop:7}}>Ksh</Text>
          <Text style={{color:"#444444",fontSize:25,fontWeight:'600',left:2.5}}>46500</Text>
          </View>
        </View>
        </View>

        <View style={styles.viewRawCard}>
        <View style={{left:10,top:10,borderRadius:10,height:40,width:40,backgroundColor:'#E24134',justifyContent:'center',alignItems:'center'}}>
        <AntDesign name="arrowup" size={24} color="#FFFFFF" />
        </View>
        <View style={{marginTop:40,left:10}}>
          <Text style={{color:'#6B6B6B',marginBottom:5}}>Expenses</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={{color:"#6B6B6B",marginTop:7}}>Ksh</Text>
          <Text style={{color:"#444444",fontSize:25,fontWeight:'600',left:2.5}}>46500</Text>
          </View>
        </View>
          </View>
        </View>
        <View>
            <Text style={{color:'#7D7D7D',fontSize:25,marginTop:10}}>Transactions</Text>
        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={styles.rowView}>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <View style={{height:30,width:30,backgroundColor:'#FFFFFF',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
            <AntDesign name="arrowdown" size={24} color="#E24134" />
            </View>
              <Text style={{color:'#6B6B6B',fontSize:15,left:15,marginTop:8}}>Buying J4 shoes</Text>
            </View>
            <View style={{flexDirection:'row'}}>
          <Text style={{color:"#6B6B6B",marginTop:7}}>Ksh</Text>
          <Text style={{color:"#444444",fontSize:25,fontWeight:'600',left:2.5}}>46500</Text>
          </View>
          </View>
        <View style={styles.borderWidth}></View>
        <View style={styles.rowView}>
            <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
            <View style={{height:30,width:30,backgroundColor:'#FFFFFF',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
            <AntDesign name="arrowup" size={24} color="#21BF86" />
            </View>
              <Text style={{color:'#6B6B6B',fontSize:15,left:15,marginTop:8}}>Buying J4 shoes</Text>
            </View>
            <View style={{flexDirection:'row'}}>
          <Text style={{color:"#6B6B6B",marginTop:7}}>Ksh</Text>
          <Text style={{color:"#444444",fontSize:25,fontWeight:'600',left:2.5}}>46500</Text>
          </View>
          </View>
        <View style={styles.borderWidth}></View>
        
        </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
  
}

export default TransactionScreen

const styles = StyleSheet.create({
  headerText:{
    marginTop:40
  },
  topCard:{
    marginTop:20,
    backgroundColor:'#FFFFFF',
    height:120,
    borderRadius:10
  },
  viewRawCard:{
    height:150,
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    width:160
  },
  rowView:{
    flexDirection:'row',
    justifyContent:'space-between',
    // right:20,
    width:'90%',
    // left:20
  },
  borderWidth:{
    borderBottomWidth:1,
    marginTop:15,
    marginBottom:10,
    borderBottomColor:'#D3D3D3'
  }
})