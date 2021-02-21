import React from 'react'
import { Button } from 'react-native'

export default props => {
    function execute() {
        console.warn("clicked!");
    }
     return (
        // An example of React.Fragment. Empty tag
        <> 
            <Button
                title="Execute"
                onPress={execute}
            />

            <Button
                title="Execute 02"
                onPress={() => console.warn("Execute 02")}
            />
        </>
     )
}