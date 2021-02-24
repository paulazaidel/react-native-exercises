import React from 'react'
import { Text, View } from 'react-native'
import Style from './commonStyle'

export default ({ number = 0}) => {
   return (
        <View>
            <Text style={Style.textBig}>The result is:</Text>
            {number % 2 === 0
                ?<Text style={Style.textBig}>Even</Text>
                :<Text style={Style.textBig}>Odd</Text>
            }
        </View>
   )
}