import React from 'react'
import { View } from 'react-native'

import FirstComponent from './components/FirstComponent'
import OfficialComponent, { Component1, Component2 } from './components/MultiComponents'


export default () => (
    <View>
        <FirstComponent />
        <OfficialComponent />
        <Component1 />
        <Component2 />
    </View>
)