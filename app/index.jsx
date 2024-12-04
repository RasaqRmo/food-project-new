import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeView from './screens/home'
import BottomNavigation from '../components/BottomNavigation'

const index = () => {
  return (
    <View style={{flex:1,}}>
      <Text>index</Text>
      <HomeView/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})