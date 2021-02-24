import React from 'react'
import { Text } from 'react-native'

export default props => {
    return (
        <>
            <Text>[Begin] Family Members:</Text>
                {props.children}
            <Text>[End] Family Members</Text>
        </>
    )
}