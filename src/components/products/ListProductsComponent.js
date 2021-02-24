import React from 'react'
import { Text } from 'react-native'

import Style from '../commonStyle'
import Produtos from './Products'

export default props => {
    function getList() {
        return Produtos.map(p => {
            return (
                <Text key={p.id}>
                    {p.id}) {p.name} Price R$ {p.price}
                </Text>
            )
        })
    }

    return (
        <>
            <Text style={Style.textBig}>
                Products
            </Text>
            {getList()}
        </>
    )
}