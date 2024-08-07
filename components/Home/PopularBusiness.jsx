import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from './../../constants/Colors'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import {db} from '../../configs/FirebaseConfigs'
import { FlatList } from 'react-native'
import PopularBusinessCard from './PopularBusinessCard'

export default function PopularBusiness() {
  const [businessList,setBusinessList]=useState([]);
  useEffect(()=>{
    GetBusinessList()
  },[])

  const GetBusinessList=async()=>{
    setBusinessList([]);
    const q=query(collection(db,'BusinessList'),limit(10))
    const querySnapShot=await getDocs(q)

    querySnapShot.forEach((doc)=>{
      console.log(doc.data())
      setBusinessList(prev=>[...prev,doc.data()])
    })
  }
  return (
    <View>
 <View style={{
        paddingLeft:20,
        marginBottom:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
      }}>
      <Text 
        style={{paddingLeft:20,
        marginTop:10,
        fontSize:20,
        fontFamily:'outfit-bold',}}>
       Popular Business
        </Text>
        <Text style={{
            color:Colors.PRIMARY,fontFamily:'outfit-medium'
        }}>View All</Text>
        </View> 

        <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
          <PopularBusinessCard
          key={index}
          business={item}/>
        )}
        />  
         </View>
  )
}