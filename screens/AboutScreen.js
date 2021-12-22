import React from 'react' 
import {StyleSheet, View, Text} from 'react-native'

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text>เกี่ยวกับ</Text>
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
