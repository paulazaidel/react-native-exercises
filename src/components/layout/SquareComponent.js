import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={[style.View, { backgroundColor: props.color || "#000"}]} />
    )
}

const style = StyleSheet.create({
    View: {
        height:50,
        width: 50
    }
})