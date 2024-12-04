import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import BottomNavigation from '../../components/BottomNavigation'

const About = ({navigation}) => {
  return (
    <View>
      <Text>About</Text>
      <BottomNavigation/>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    allignItems: 'cnter',
  },
})