import React,{useState} from "react";
import {View, SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native'

const TouchablePractice = () => {
    const [name, onChangeName] = useState("")
    const [email, onChangeEmail] = useState("")

    const checkInput = () => {
        if (!name.trim()){
            alert("Please Enter your name")
            return
        }
        if (!email.trim()){
            alert("Please Enter your email")
            return
        }

        alert("Success")
        return
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <TextInput
                    style = {styles.textInputStyle}
                    placeholder="Enter Your Name Here"
                    placeholderTextColor = "#AAAAAA"
                    underlineColorAndroid="transparent"
                    onChangeText={onChangeName}
                />
                <TextInput
                    style = {styles.textInputStyle}
                    placeholder="Enter Your Email Here"
                    placeholderTextColor = "#AAAAAA"
                    underlineColorAndroid="transparent"
                    onChangeText={onChangeEmail}
                />
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity = {0.5}
                >
                    <Text style={{color:"#ffffff"}}>SUMMIT</Text> 
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default TouchablePractice;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor:"#ffffff"
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
        color:"black"
    },
    button: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        paddingHorizontal: 5,
        justifyContent:"center",
        borderWidth: 0.5,
        marginTop: 15,
        fontWeight:"bold",
        backgroundColor:"#999fff"
    },
});
