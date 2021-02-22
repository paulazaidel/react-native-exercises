import React, { useState } from 'react'
import { Text } from 'react-native'


import Child from './ChildComponent'

export default () => {
    const [num, setNum] = useState(0)
    function showValue(number) {
        setNum(number)
    }

    return (
        <React.Fragment>
            <Text>{num}</Text>

            <Child 
                min={10} 
                max={20}
                function={showValue}
            />
        </React.Fragment>
    )
}