import React from 'react'
import { View, StyleSheet } from 'react-native'

import FirstComponent from './components/FirstComponent'
import OfficialComponent, { Component1, Component2 } from './components/MultiComponents'

export default () => (
    <View style={style.App}>
        <FirstComponent />
        <OfficialComponent />
        <Component1 />
        <Component2 />
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})