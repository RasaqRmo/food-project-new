import React from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCarrot, faCookieBite, faIdBadge, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'expo-router';

const BottomNavigation = () => {
    const router = useRouter();

    // Create array to handle the route(nameOfPage, iconOfPage, pageDestination)
    const tabs = [
        { name: 'Home', icon: faHouse, route: '/'},
        { name: 'Foods', icon: faBowlFood, route: '/foods'},
        { name: 'Recipes', icon: faCarrot, route: '/rescipes'},
        { name: 'Profile', icon: faIdBadge, route: '/profile'},
    ];

    return (
        <View style={Styles.Container}>
            {/' map the ui '/}
            {tabs.map((tab, index) => (
                <Pressable
                  key={index}
                  style={styles.tab}
                  onPress={() => router.push(tab.route)}
                >
                  <FontAwesomeIcon icon={tab.icon} size={30} color="black" />
                  <Text style={styles.text}>{tab.name}</Text>
                </Pressable>  
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        allignItems: 'center',
        padding: 12,
        borderTopWidth: 1,
        backgroundColor: '#e3e3e3',
        borderTopColor: '#d4d4d4',
        bottom: 0,
        position: 0,
        width: '100%',
    },
    tab: {
        allignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        marginTop: 2,
        color: 'orange',
        fontWeight: 'bold'
    },
});

export default BottomNavigation;