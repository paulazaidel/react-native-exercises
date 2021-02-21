import React from 'react'
import { View, StyleSheet } from 'react-native'

import MinMax from "./components/MinMax"

export default () => (
    <View style={style.App}>
        <MinMax min={3} max={20} />
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