import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useLinkProps } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="ProfileCard" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




  

export default createNativeStackNavigator
