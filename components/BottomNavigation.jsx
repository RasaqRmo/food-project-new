import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCarrot, faCookieBite, faIdBadge, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'expo-router';

const BottomNavigation = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable style={styles.tab} onPress={()=>router.push('../app/screens/home')}>
    <FontAwesomeIcon icon={faHouse} size={30} color='black' />
    <Text style={styles.text}>Foods</Text>
      </Pressable>
      <Pressable style={styles.tab} onPress={()=>router.push('./About')}>
    <FontAwesomeIcon icon={faCarrot} size={30} color='black' />
    <Text style={styles.text}>Recipies</Text>
      </Pressable>
      <Pressable style={styles.tab} onPress={()=>router.push('./landing')}>
    <FontAwesomeIcon icon={faIdBadge} size={20} color='black' />
    <Text style={styles.text}>Profile</Text>
      </Pressable>
      <Pressable style={styles.tab} onPress={()=>router.push('./Login')}>
    <FontAwesomeIcon icon={faCookieBite} size={20} color='black' />
    <Text style={styles.text}>Ingredients</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        allignItems: 'center',
        padding: 12,
        borderTopWidth: 1,
        borderTopColor: '#d4d4d4',
        position: 'absolute',
        bottom: 0,
        width: '100%'
      },
      tab:{
        allignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      },
      text:{
        fontSize: 12,
        marginTop: 2,
        color: 'orange',
      }
})
export default BottomNavigation

