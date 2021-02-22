import React from 'react'
import { View, StyleSheet } from 'react-native'

import MainComponent from './components/indirectCommunication/MainComponent'

export default () => (
    <View style={style.App}>
       <MainComponent />
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