import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Avatar, bio, name, info } from 'react-native-elements';

const ProfileCard = () => {
  return (
    <View style={{flex:1,}}>
        <Card containerStyle={{ padding: 0 }}>
          <Card.Title style={{ textAlign: 'center' }}>Rasaq</Card.Title>
          <View style={{ alignItems: 'center' }}>  
            <Image rounded size="large" source={{ uri: "https://picsum.photos/seed/picsum/200/300" }} />
          </View>
          <Card.Content>
            <Text style={{ textAlign: 'center' }}>hi im Rasaq</Text>
          </Card.Content>
        </Card> 
    </View>
  
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  info: {
    marginLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 14,
    color: 'yellow',
  },
});

export default ProfileCard;
