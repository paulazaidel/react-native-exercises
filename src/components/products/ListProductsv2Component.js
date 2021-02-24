import React from 'react'
import { Text, FlatList } from 'react-native'

import Style from '../commonStyle'
import Produtos from './Products'

export default props => {
    const produtoRender = ({ item: p }) => {
        return <Text>{p.id}) {p.name} - R$ {p.price}</Text>
    }

    return (
        <>
            <Text style={Style.textBig}>
                Products V2
            </Text>
            <FlatList
                data={Produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </>
    )
}