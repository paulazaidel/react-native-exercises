import React from 'react'
import { Text } from 'react-native'
import Style from './../commonStyle'

export default props => {
    return (
        <React.Fragment>
             <Text style={Style.textBig}>{props.first}</Text>
             <Text style={Style.textBig}>{props.second}</Text>
        </React.Fragment>
    )
}