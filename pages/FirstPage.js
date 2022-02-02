import React from 'react';
import { View, Text, Button } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from '../components/styles';
import Logo from './Logo'

const FirstPage = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Logo/>,
            headerRight: () => (
                <Button onPress={()=>alert("Just Dummy:))")} title="Register"/>
            )
        })

    })
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,padding:15}}>
        <View style={styles.container}>
            <Ionicons name="home" size={50} color="aqua" />
          <Text style = {styles.textTopStyle}>
           This is the First Page
          </Text>
            <Button 
                title={"GO TO SECOND PAGE"}
                onPress={()=> navigation.navigate("SecondPage")}
            />
            <Button 
                title={"GO TO THIRD PAGE"}
                onPress={()=> navigation.navigate("ThirdPage")}
            />
            <View style={{bottom: 10, position: 'absolute'}}>
            <Text style={styles.textBottomStyle}>
              Thai-Nichi Institute of Technology
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
