import React from 'react'
import { View, StyleSheet } from 'react-native'


export default props => {
    return (
        <View style={style.Flex}>
            <View style={style.V0} />
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}

const style = StyleSheet.create({
    Flex: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000', // Black
    },
    V0: {
        backgroundColor: '#36c9a7', //Green
        height: 300,
    },
    V1: {
        backgroundColor: '#ff801a', // Orange
        flexGrow: 3,
    },
    V2: {
        backgroundColor: '#dd22c1', // Purple
        flexGrow: 1,
    }
})