import React, { useState } from 'react'
import { Button, Text } from 'react-native'

import Style from './commonStyle'

export default props => {
    const [number, setNumber] = useState(props.number)

    const inc =() => setNumber(number + 1)
    const dec = () => setNumber(number - 1)

    return (
        <React.Fragment>
            <Text style={Style.textBig}>{ number }</Text>
            <Button title="+" onPress={inc}></Button>
            <Button title="-" onPress={dec}></Button>
        </React.Fragment>
    )
}