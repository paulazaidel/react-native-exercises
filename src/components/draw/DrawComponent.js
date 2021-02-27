import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import Style from '../commonStyle'
import DrawNumber from './DrawNumber'

export default class DrawComponent extends Component {

    state = {
        amountNumbers: this.props.amountNumbers,
        numbers: []
    }

    changeAmountNumbers = (amount) => {
        this.setState({ amountNumbers: +amount })
    }

    generateNewNumber = numbers => {
        const number = parseInt(Math.random() * 60) + 1
        return numbers.includes(number) ? this.generateNewNumber(numbers) : number
    }

    generateNumbers = () => {
        const numbers = Array(this.state.amountNumbers)
            .fill()
            .reduce(n => [...n, this.generateNewNumber(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numbers })
    }

    showNumbers = () => {
        const numbers = this.state.numbers
        return numbers.map(number => {
            return <DrawNumber key={number} number={number} />
        })
    }

    render() {
        return (
            <>
                <Text style={Style.textBig}>
                    Mega-Sena Generator
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Qtde de Números"
                    value={`${this.state.amountNumbers}`}
                    onChangeText={this.changeAmountNumbers}
                />
                <Button
                    title='Gerar'
                    onPress={this.generateNumbers}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.showNumbers()}
                </View>
            </>
        )
    }
}