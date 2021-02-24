import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'

import Style from './commonStyle'

export default props => {
    const [nome, setNome] = useState('')
    return (
        <View>
            <Text style={Style.textBig}>{nome}</Text>
            <TextInput
                placeholder="Digit your name"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}