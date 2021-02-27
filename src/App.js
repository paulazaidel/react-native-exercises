import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import DrawComponent from './components/draw/DrawComponent'


export default () => (
    <SafeAreaView style={style.App}>
        <DrawComponent amountNumbers={12} />
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