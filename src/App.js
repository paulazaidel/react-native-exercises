import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import ListProducts from './components/products/ListProductsComponent'
import ListProductsv2 from './components/products/ListProductsv2Component'


export default () => (
    <SafeAreaView style={style.App}>
        {/* <ListProducts /> */}
        <ListProductsv2 />
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