import React, { Fragment } from 'react'
import { Text } from 'react-native'

import Style from './commonStyle'

export default props => {
    return (
        <Fragment>
            <Text style={Style.textBig}>{props.main}</Text>
            <Text>{props.secondary}</Text>
        </Fragment>
    )
}