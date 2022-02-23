import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import DetailScreen from './screens/DetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuScreen from './screens/MenuScreen';
import RegisterScreen from './screens/RegisterScreen';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {backgroundColor: '#FACF5A'},
        headerTintColor: '#FFFF',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'หน้าหลัก'}}
      />
        <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{title: 'สินค้า'}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'ลงทะเบียน'}}
      />
    </Stack.Navigator>
  )
}
function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FACF5A' },
        headerTintColor: '#233142',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Product" component={ProductScreen} options={{ title: 'สินค้า' }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{title: 'หน้าหลัก'}}/>
      <Stack.Screen name="Detail" component={DetailScreen} options={{title: 'รายละเอียด'}}/>
    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        drawerContent={(props)=><MenuScreen {...props}/>}
      >
        <Drawer.Screen name='Home' component ={HomeStack}/>
        <Drawer.Screen name='Product' component ={ProductStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App