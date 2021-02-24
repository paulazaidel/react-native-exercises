import React, { useState } from 'react'
import { Text } from 'react-native'
import Style from '../commonStyle'

import CounterDisplay from './CounterDisplay'
import CounterActions from "./CounterActions";

export default props => {
    const [number, setNumber] = useState(0)

    const increment = () => setNumber(number + 1)
    const decrement = () => setNumber(number - 1)

    return (
        <>
            <Text style={Style.textBig}>Counter</Text>
            <CounterDisplay number={number}/>
            <CounterActions increment={increment} decrement={decrement} />
        </>
    )
}