import React from "react";
import {View, Text} from "react-native"

const Logo = () => {
    const title = "TNI"
    const isTitle = true
    const showData = () => <Text>Hello Decermber</Text>
    return (
        <View>
            <Text style={{color:'blue', fontSize:20}}>Thai-Nichi</Text>
            {
                isTitle === true && <Text>{title}</Text>
            }
            {
                isTitle === true
                ?<Text>{title}</Text>
                :<Text>Thai-Nichi</Text>
            }
            {showData()}
        </View>
    )
}

export default Logo;
