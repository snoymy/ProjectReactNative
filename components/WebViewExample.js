import React from 'react'
import { SafeAreaView, Text, View} from 'react-native'
import WebView from 'react-native-webview'

const WebViewExample = () => {
    return (
        <SafeAreaView>
            <View style={{flex:1}}>
                <WebView
                    style={{flex:1}}
                    source={{uri:"https://it.tni.ac.th"}}
                    javaScriptEnabled={true}
                />
            </View>
        </SafeAreaView> 
    )
}

export default WebViewExample
