import React from 'react'
import { Text } from 'react-native'

import Style from '../commonStyle'

export default props => {
    return (
        <Text style={Style.textBig}>
            {props.name} {props.surname}
        </Text>
    )
}