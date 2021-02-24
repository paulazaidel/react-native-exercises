import React from 'react'
import { Text } from 'react-native'

import Style from './commonStyle'
import If from './IfComponent'

export default props => {
    const user = props.user || {}
    return (
        <>
            <If test={user && user.name && user.email}>
                <Text style={Style.textBig}>User:</Text>
                <Text style={Style.Style}>
                    {user.name} - {user.email}
                </Text>
            </If>
        </>
    )
}