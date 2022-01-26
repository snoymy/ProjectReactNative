import React from 'react';
import { View, Text,Button,SafeAreaView } from 'react-native';

import {styles} from '../components/styles';

const SecondPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,padding:15}}>
        <View style={styles.container}>
          <Text style = {styles.textTopStyle}>
           This is the Second Page
          </Text>
            <Button 
                title={"GO TO FIRST PAGE"}
                onPress={()=> navigation.navigate("FirstPage")}
            />
            <Button 
                title={"GO TO THIRD PAGE"}
                onPress={()=> navigation.navigate("ThirdPage")}
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;
