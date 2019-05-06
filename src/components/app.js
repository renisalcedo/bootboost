import React, { Component } from 'react'
import Data from './data'

// Components
import Options from './options/options'
import Edit from './edit/edit'
import Preview from './preview/preview'
import Generatecode from './generateCode/generateCode'

class App extends Component {
    render() {
        const { data } = Data

        return (
            <div>
                <Options data={data} />
                <Edit />
                <Preview />
                <Generatecode />
            </div>
        )
    }
}

export default App