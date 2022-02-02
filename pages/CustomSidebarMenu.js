import { View, Text, Linking, Image, SafeAreaView, StyleSheet, } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';

const CustomSidebarMenu = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        source={require('../assets/react_logo.png')}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL('https://it.tni.ac.th')}
        />
        <View style={styles.customItem}>
          <Text onPress={() => Linking.openURL('https://reg.tni.ac.th')}>
            Rate Us
          </Text>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
