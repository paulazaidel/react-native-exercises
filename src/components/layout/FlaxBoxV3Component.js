import React from 'react'
import { View, StyleSheet } from 'react-native'

import Square from './SquareComponent'

export default props => {
    return (
        <View style={style.Flex}>
            <Square color='#ff801a' />
            <Square color='#50d1f6' />
            <Square color='#dd22c1' />
            <Square color='#8312ed' />
            <Square color='#36c9a7' />
        </View>
    )
}

const style = StyleSheet.create({
    Flex: {
        backgroundColor: "#000",
        width: '100%',
        height: 350,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end'
    }
})