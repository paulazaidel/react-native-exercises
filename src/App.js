import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import FlexBoxV2 from './components/layout/FlaxBoxV2Component'


export default () => (
    <SafeAreaView style={style.App}>
        <FlexBoxV2></FlexBoxV2>
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