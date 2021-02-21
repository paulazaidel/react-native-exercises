import React from "react"
import { Text } from "react-native"

import Style from "./commonStyle"

export default (props) => {
    return (
        <Text style={Style.textBig}>
            O valor {props.max} é maior que o valor {props.min}!
        </Text>
    )
}