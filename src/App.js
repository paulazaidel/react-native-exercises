import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import FlexBoxV3 from './components/layout/FlaxBoxV3Component'


export default () => (
    <SafeAreaView style={style.App}>
        <FlexBoxV3></FlexBoxV3>
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})