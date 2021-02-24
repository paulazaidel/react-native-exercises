import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import UserLogged from './components/UserLoggedComponent'


export default () => (
    <SafeAreaView style={style.App}>
       <UserLogged user={{name:'Paula', email:'paula@gmail.com'}} />
       <UserLogged user={{name:'Paula'}} />
       <UserLogged user={{}} />
       <UserLogged />
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