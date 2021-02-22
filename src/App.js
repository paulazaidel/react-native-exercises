import React from 'react'
import { View, StyleSheet } from 'react-native'

import Count from "./components/CountComponent"

export default () => (
    <View style={style.App}>
        <Count number={100}/>
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})