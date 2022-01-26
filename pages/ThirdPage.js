import React from 'react';
import { View, Text,Button,SafeAreaView } from 'react-native';

import {styles} from '../components/styles';

const ThirdPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,padding:15}}>
        <View style={styles.container}>
          <Text style = {styles.textTopStyle}>
           This is the Third Page
          </Text>
            <Button 
                title={"GO TO First PAGE"}
                onPress={()=> navigation.navigate("FirstPage")}
            />
            <Button 
                title={"GO TO SECOND PAGE"}
                onPress={()=> navigation.navigate("SecondPage")}
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;
