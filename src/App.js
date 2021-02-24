import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import InputName from './components/InputNameComponent'


export default () => (
    <SafeAreaView style={style.App}>
        <InputName></InputName>
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