import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import Family from './components/relationship/FamilyComponent'
import Member from './components/relationship/MemberComponent'


export default () => (
    <SafeAreaView style={style.App}>
       <Family>
            <Member name="Bia" surname="Arruda" />
            <Member name="Carlos" surname="Arruda" />
        </Family>
        <Family>
            <Member name="João" surname="Silva" />
            <Member name="Bastião" surname="Silva" />
        </Family>
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})