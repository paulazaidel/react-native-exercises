import React from 'react'

import Child from "./ChildComponent"

export default () => {
    return (
        <React.Fragment>
            <Child first={10} second={20}/>
            <Child first={30} second={40}/>
        </React.Fragment>
    )
}