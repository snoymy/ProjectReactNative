import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen';
import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
            initialRouteName="FirstPage"
            screenOptions={{
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
        >
        <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{title: "หน้าหลัก"}}
        />
        <Stack.Screen 
            name="About" 
            component={AboutScreen}
            options={{title: "เกี่ยวกับ"}}
        />
        <Stack.Screen 
            name="FirstPage" 
            component={FirstPage}
            options={{title: "First Page"}}
        />
        <Stack.Screen 
            name="SecondPage" 
            component={SecondPage}
            options={{title: "Second Page"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
