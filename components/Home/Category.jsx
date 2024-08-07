import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from './../../constants/Colors'
import { collection, getDocs, query } from 'firebase/firestore'
import {db} from '../../configs/FirebaseConfigs'
import { FlatList } from 'react-native'
import CategoryItem from './CategoryItem'



export default function Category() {
    const [categoryList,setCategoryList]=useState();
useEffect(()=>{
    GetCategoryList()
},[])
const GetCategoryList=async()=>{
    setCategoryList([]);
    const q=query(collection(db,'Category'));
    const querySnapShot=await getDocs(q)

    querySnapShot.forEach((doc)=>{
        console.log(doc.data());
        setCategoryList(prev=>[...prev,doc.data()])
    })
}
  return (
    <View>
      <View style={{
        padding:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5
      }}>
      <Text 
        style={{paddingLeft:20,
        marginTop:10,
        fontSize:20,
        fontFamily:'outfit-bold',}}>
        Category
        </Text>
        <Text style={{
            color:Colors.PRIMARY,fontFamily:'outfit-medium'
        }}>View All</Text>
        </View>

        <FlatList
            data={categoryList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginLeft:20}}
            renderItem={({item,index})=>(
                <CategoryItem 
                Category={item} 
                key={index}
                onCategoryPress={(Category)=>console.log(Category)}/>
            )}        
        />
    </View>
  )
}