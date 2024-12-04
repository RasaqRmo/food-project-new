import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { StatusBar } from 'expo-status-bar';

const LemmeLand = () => {
    const router = useRouter();
  
  
    return (
    <Pressable onPress={()=>router.push('./screens/home')} style={styles.container}>
       <TextInput />
    </Pressable>
  )
}

export default LemmeLand

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange',
        justifyContent:'center',
        allignItems:'center',
    },
    food:{
        fontSize: 60,
        color:'white',
        fontWeight: 'bold',
        marginTop:2,
    },
    Right:{
        fontSize: 22,
        color:'white',
        fontWeight:'semibold',
        marginTop:2,
    }
})