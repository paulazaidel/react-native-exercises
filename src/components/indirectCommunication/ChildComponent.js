import React from 'react'
import { Button } from 'react-native'

export default props => {
    function generateNumber(min, max) {
        return parseInt(Math.random() * max - min + 1) + min
    }
    return (
        <Button 
            title="Execute"
            onPress={function() {
                const number = generateNumber(props.min, props.max)
                props.function(number)
            }}
        />
    )
}