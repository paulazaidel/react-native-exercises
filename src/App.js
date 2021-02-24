import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import OddEven from './components/OddEven'

export default () => (
    <SafeAreaView style={style.App}>
       <OddEven  number={4}/>
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