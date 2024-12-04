import { StyleSheet, Text, View, FlatList, Button, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import BottomNavigation from '../../components/BottomNavigation'

const HomeView = () => {
  const router = useRouter()  
  return(
    <View style={styles.container}>
      <Text>home</Text>
      <Button title="Press Me" onPress={()=>
        router.push('./login')} />
        <BottomNavigation/>
    </View>
  )
}

   
const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});
         
export default HomeView



