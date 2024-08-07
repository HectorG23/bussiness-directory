import { View, Text, Image,} from 'react-native'
import React from 'react'
import {Colors} from './../../constants/Colors'
import { TouchableOpacity } from 'react-native'

export default function CategoryItem({Category,onCategoryPress}) {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(Category)}>
        <View style={{padding:15,
            backgroundColor:Colors.PRIMARY,
            borderRadius:99,
            marginRight:15
        }}>
     <Image source={{uri:Category.icon}}
     style={{width:40,
        height:40
     }}/>
     </View>
     <Text style={{fontSize:12,
        fontFamily:'outfit-medium',
        textAlign:'center',
        marginTop:5}}>{Category.name}</Text>
    </TouchableOpacity>
  )
}