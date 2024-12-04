import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';


const LoginPage = () => {
  const [username, setUsername] = useState('True');
  const [password, setPassword] = useState('True');

  const handleLogin = () => {
    // Implement   
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return ( 
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}   

      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry   

        onChangeText={setPassword}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      <BottomNavigation/>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',   

  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius:  
 5,
  },
});

export default LoginPage;