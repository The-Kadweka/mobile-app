import { Image, SafeAreaView, StyleSheet,TouchableOpacity, Text, View,FlatList} from 'react-native'
import electricity from '../../assets/catImages/flash.png'
import beach from '../../assets/catImages/beach.png'
import bill from '../../assets/catImages/bill.png'
import burger from '../../assets/catImages/burger.png'
import donation from '../../assets/catImages/donation.png'
import education from '../../assets/catImages/education.png'
import hmeappliance from '../../assets/catImages/electric-appliance.png'
import house from '../../assets/catImages/house.png'
import loan from '../../assets/catImages/loan.png'
import other from '../../assets/catImages/other.png'
import phonecall from '../../assets/catImages/phone-call.png'
import savings from '../../assets/catImages/piggy-bank.png'
import subscribe from '../../assets/catImages/subscribe.png'
import vehicle from '../../assets/catImages/vehicles.png'
import clothing from '../../assets/catImages/cloting.png'
import income from '../../assets/catImages/icons8-income-64.png'
import entertainment from '../../assets/catImages/icons8-entertainment-64.png'

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import logo from '../../assets/avata.png'
import React from 'react'

const data=[
  {'id':1,'name':'Kenya Dog'},
  {'id':2,'name':'Kenya Dog'},
  {'id':3,'name':'Kenya Dog'},
  {'id':4,'name':'Kenya Dog'},
  {'id':5,'name':'Kenya Dog'},
  {'id':6,'name':'Kenya Dog'},
  {'id':7,'name':'Kenya Dog'},
  {'id':8,'name':'Kenya Dog'},
  {'id':9,'name':'Kenya Dog'},
  {'id':10,'name':'Kenya Dog'}
]
const MonthDataScreen = () => {
  return (
   <SafeAreaView style={{width:'100%',height:'100%',backgroundColor:'white'}}>
    <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%'}}>
          <LinearGradient colors={['#FB7BA2', '#FCE043']} style={styles.gradient}>
            <View><Text style={styles.amtText}><Text style={{color:'grey',fontSize:20}}>KES</Text>9000</Text></View>
            <View style={styles.typeContainer}>
              <View style={{flexDirection:'row'}}>
               <TouchableOpacity onPress={{}}>
               <View style={{opacity:0.7,float:'left',height:30,backgroundColor:'white',width:30,justifyContent:'center',alignItems:'center',borderRadius:50}}>
                <Ionicons name="arrow-down-outline" size={20} color="green" />
                </View>
               </TouchableOpacity>
              <View style={{left:10}}>
                <Text>Income</Text>
                <Text><Text style={{fontSize:10,color:'grey'}}>KES</Text>300</Text>
              </View>
              </View>
              <View style={{flexDirection:'row'}}>
               <TouchableOpacity onPress={{}}>
               <View style={{opacity:0.7,right:10,height:30,backgroundColor:'white',width:30,justifyContent:'center',alignItems:'center',borderRadius:50}}>
                <Ionicons name="arrow-up-outline" size={20} color="red" />
                </View>
               </TouchableOpacity>
              <View>
                <Text>Expense</Text>
                <Text><Text style={{fontSize:10,color:'grey'}}>KES</Text>3000</Text>
              </View>
              </View>
            </View>
          </LinearGradient>
    <View style={styles.middleSection}>
     <FlatList
     data={[
        {'id':1,'name':'BILL','amt':200,'image':bill},
        {'id':2,'name':'CHARITY','amt':200,'image':donation},
        {'id':3,'name':'CLOTHING','amt':200,'image':clothing},
        {'id':4,'name':'LOAN','amt':200,'image':loan},
        {'id':5,'name':'AIRTIME','amt':200,'image':phonecall},
        {'id':6,'name':'SAVINGS','amt':200,'image':savings},
        {'id':7,'name':'EDUCATION','amt':200,'image':education},
        {'id':8,'name':'LEISURE','amt':200,'image':entertainment},
        {'id':9,'name':'Electricity','amt':200,'image':electricity},
        {'id':10,'name':'FOOD/GROCERIES','amt':200,'image':burger},
        {'id':11,'name':'RENT','amt':200,'image':house},
        {'id':12,'name':'SUBSCRIPTION','amt':200,'image':subscribe},
        {'id':13,'name':'INCOME','amt':200,'image':income},
        {'id':14,'name':'TRANSPORT','amt':200,'image':vehicle},
        {'id':15,'name':'VACATIONS','amt':200,'image':beach},
        {'id':16,'name':'HOUSEHOLDS','amt':200,'image':hmeappliance},
        {'id':17,'name':'OTHERS','amt':200,'image':other}
     ]}
    horizontal={true}
     renderItem={({item})=>
     <View style={styles.categorySection}>
          <Image source={item.image} style={styles.ImageView}/>
        <Text>{item.name}</Text>
        <Text><Text style={{color:'green',fontSize:10}}>KES</Text>{item.amt}</Text>
      </View>
    }
     />
    </View>

    <View style={styles.bottomSection}>
      <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=>
      <>
      <View style={styles.rowView}>
       <View style={{flexDirection:'row'}}>
        <View style={{height:50,width:50,backgroundColor:'pink',borderRadius:100,left:10}}>
        </View>
        <View style={{marginTop:8,left:25}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Buying j4 Shoes</Text>
        <Text><Text style={{fontSize:10,color:'grey'}}>KES</Text>400</Text>
        </View>
       </View>
       <View style={{marginTop:8}}>
       <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
       </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:15}}>
      <View style={{borderBottomWidth:1,width:'77%',borderBottomColor:'grey'}}></View>
      </View>
      </>
    }
      />
    </View>
    </View>
   </SafeAreaView>
  )
}

export default MonthDataScreen

const styles = StyleSheet.create({
  containerGradient:{
    justifyContent:'center',
    alignItems:'center',
    width:100
  },
  amtText:{
    fontSize:30,
    fontWeight:'bold',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:35
  },
  typeContainer:{
    flexDirection:'row',
    bottom:-40,
    padding:15,
    marginBottom:0,
    justifyContent:'space-between'
  },
  gradient:{
    height:200,
    marginTop:50,
    width:"95%",
    borderRadius:20
  },
  categorySection:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey',
    height:120,
    marginTop:20,
    left:10,
    marginRight:10,
    width:130,
    borderRadius:20,
    
  },
  ImageView:{
    height:55,
    width:55
  },
  rowView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10,
  },
  topSection:{
    backgroundColor:'yellow',
    width:'90%',
    height:'25%',
    borderRadius:10,
    // justifyContent:'center',
    marginBottom:20,
  },
  middleSection:{
    marginBottom:8,
    width:'90%',
    height:'25%'
  },
  bottomSection:{
    width:'90%',
    height:'50%'
  }
})