import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";

import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
} from "native-base";

const MenuScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Text
          style={{
            color: "blue",
            fontSize: 20,
            fontWeight: "bold",
            padding: 20,
          }}
        >
          เมนูหลัก
        </Text>
        {/* code from native base*/}
        <Content>
          <ListItem
            icon
            style={{ marginBottom: 10, marginTop: 10 }}
            onPress={() => navigation.navigate("HomeStack")}
          >
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="home" />
              </Button>
            </Left>
            <Body>
              <Text>หน้าหลัก</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon onPress={() => navigation.navigate("ProductStack")}>
            <Left>
              <Button style={{ backgroundColor: "#e91263" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>สินค้า</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem
            icon
            style={{ marginBottom: 10, marginTop: 10 }}
            onPress={() => navigation.navigate("Login")}
          >
            <Left>
              <Button style={{ backgroundColor: "#43C6DB" }}>
                <Icon active name="log-in" />
              </Button>
            </Left>
            <Body>
              <Text>เข้าสู่ระบบ</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </View>
    </ScrollView>
  );
};

export default MenuScreen;
