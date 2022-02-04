import React from 'react';
import { View, Text,Button,SafeAreaView } from 'react-native';

import {styles} from '../components/styles';

const FirstPage = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,padding:15}}>
        <View style={styles.container}>
          <Text style = {styles.textTopStyle}>
           This is the First Page
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;
