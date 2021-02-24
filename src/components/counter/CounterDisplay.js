import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Style from '../commonStyle'

export default props => {
    return (
        <View style={style.Display}>
            <Text style={[Style.textBig, style.DisplayText]}>{ props.number }</Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: "#000",
        padding: 20,
        width: 300
    },
    DisplayText: {
        color: "#FFF"
    }
})