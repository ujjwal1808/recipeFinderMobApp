import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Bell, BookMarked, House, UserRound } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native';

const Footer = ({data}) => {
  const navigation = useNavigation();  
  
  return (
    <View style={{ height: 60, backgroundColor: 'white', margin: 15, borderRadius: 15 }}>
      {/* <HomeIcon color="primary" /> */}
      <View style={{ padding: 12, flexDirection: 'row', gap: 60 }}>

        <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=> navigation.navigate('home')}>
          <House color="black" size={25} />
          <View style={{ height: 4, backgroundColor: data === 'home' && 'green', width: 30, marginTop: 5, borderRadius: 100 }}></View>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center' }} onPress={()=>navigation.navigate('saved')}>
          <BookMarked color="black" size={25} />
          <View style={{ height: 4, backgroundColor: data === 'save' && 'green', width: 30, marginTop: 5, borderRadius: 100 }}></View>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('notification')}>
          <Bell color="black" size={25} />
          <View style={{ height: 4, backgroundColor: data === 'notification' && 'green', width: 30, marginTop: 5, borderRadius: 100 }}></View>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('profile')}>
          <UserRound color="black" size={25} />
          <View style={{ height: 4, backgroundColor: data === 'profile' && 'green', width: 30, marginTop: 5, borderRadius: 100 }}></View>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Footer