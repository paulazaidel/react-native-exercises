import React from 'react'
import { View, StyleSheet } from 'react-native'

import Counter from './components/counter/CounterComponent'

export default () => (
    <View style={style.App}>
       <Counter />
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