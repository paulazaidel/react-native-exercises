import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import FlexBoxV1 from './components/layout/FlaxBoxV1Component'


export default () => (
    <SafeAreaView style={style.App}>
        <FlexBoxV1></FlexBoxV1>
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