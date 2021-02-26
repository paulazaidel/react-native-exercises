import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import FlexBoxV4 from './components/layout/FlaxBoxV4Component'


export default () => (
    <SafeAreaView style={style.App}>
        <FlexBoxV4></FlexBoxV4>
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