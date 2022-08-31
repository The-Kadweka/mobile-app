import { SafeAreaView, StyleSheet,FlatList, Text, View } from 'react-native'
import {BarChart} from 'react-native-gifted-charts';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const data1 = [
  {value: 2500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Jan'},
  {value: 2400, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {value: 3500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Feb'},
  {value: 3000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {value: 4500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Mar'},
  {value: 4000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {value: 5200, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Apr'},
  {value: 4900, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {value: 3000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'May'},
  {value: 2800, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {value: 5200, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'June'},
  {value: 4900, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

  {value: 3000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'july'},
  {value: 2800, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
];
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

const StaticScreen = () => {
  return (
    <SafeAreaView style={{justifyContent:'center',alignItems:'center',height:'100%'}}>
     <View
      style={{
        margin: 10,
        padding: 16,
        borderRadius: 20,
        backgroundColor: '#232B5D',
        width:'100%',
        height:'50%'
      }}>
      <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold',alignSelf:'center'}}>
        Overview
      </Text>
      <View style={{ alignItems: 'center'}}>
        <BarChart
          data={data1}
          barWidth={16}
          initialSpacing={10}
          spacing={14}
          barBorderRadius={4}
          yAxisThickness={0}
          xAxisType={'dashed'}
          xAxisColor={'lightgray'}
          yAxisTextStyle={{color: 'lightgray'}}
          stepValue={1000}
          maxValue={6000}
          noOfSections={6}
          yAxisLabelTexts={['0', '1k', '2k', '3k', '4k', '5k', '6k']}
          labelWidth={40}
          xAxisLabelTextStyle={{color: 'lightgray', textAlign: 'center'}}
          showLine
          lineConfig={{
            color: '#F29C6E',
            thickness: 3,
            curved: true,
            hideDataPoints: true,
            shiftY: 20,
            initialSpacing: -30,
          }}
        />
      </View>
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
    </SafeAreaView>
  )
}

export default StaticScreen

const styles = StyleSheet.create({
  rowView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10,
  },
  bottomSection:{
    marginTop:20,
    width:'90%',
    height:'40%'
  }
})