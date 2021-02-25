import React from 'react'
import { View, StyleSheet } from 'react-native'

import Square from './SquareComponent'

export default props => {
    return (
        <View style={style.Flex}>
            <Square></Square>
            <Square color='red'></Square>
            <Square color='#090'></Square>
            <Square color='#009'></Square>
        </View>
    )
}

const style = StyleSheet.create({
    Flex: {
        backgroundColor: "#aaa",
        flex: 1,
        justifyContent: 'space-between'
    }
})