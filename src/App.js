import React from 'react'
import { View, StyleSheet } from 'react-native'

import Title from "./components/TitleComponent"
import Button from './components/ButtonComponent'

export default () => (
    <View style={style.App}>
        <Title main="Register Product" secondary="List of Products" />

        <Button />
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