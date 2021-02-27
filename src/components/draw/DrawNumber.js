import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Style from '../commonStyle'

export default ({ number }) => {
    return (
        <View style={style.Container}>
            <Text style={[Style.textBig, style.Number]}>
                { number }
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25,
    },
    Number: {
        color: '#FFF'
    }
})