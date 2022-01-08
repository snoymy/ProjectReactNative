import React from 'react' 
import {StyleSheet, View, Text, Button} from 'react-native'

const AboutScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>เกี่ยวกับ</Text>
            <Button
                title="Go to About... again"
                onPress={()=> navigation.push("About")}
            />
            <Button
                title="Go to Home"
                onPress={()=> navigation.push("Home")}
            />
            <Button
                title="Go Back"
                onPress={()=> navigation.goBack()}
            />
            <Button
                title="Go Back to first screen in stack"
                onPress={()=> navigation.popToTop()}
            />
        </View>
    )
}

export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
