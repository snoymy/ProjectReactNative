import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View,
    TextInput,
    Button,
    } from 'react-native';

const App = () => {
    const [inputValue, setInputValue] = React.useState('');
    const checkValueIsNumber = () => {
        if(isNaN(inputValue)){
            alert("Not a number");
        }
        else{
            alert("Is number");
        }
    }
    return (
        <SafeAreaView style = {{flex:1}}>
            <View styel = {styles.container}>
                <TextInput
                    placeholder = "Enter Text"
                    style = {styles.textInputStyle}
                    onChangeText = {setInputValue}
                />
                <Button
                title = "Check Value is Number or Not"
                color = "#606070"
                onPress = {checkValueIsNumber}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    textInputStyle: {
       textAlign: "center",
       height: 50,
       wdth: '70%',
       marginBottom: 10,
       borderColor: 'black'
    }
});

export default App;