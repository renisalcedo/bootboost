import React, { Component } from 'react'
import Data from './data'

// Components
import Header from './header/header'
import Options from './options/options'
import Edit from './edit/edit'
import Preview from './preview/preview'
import Generatecode from './generateCode/generateCode'
import Footer from './footer/footer'

class App extends Component {
    render() {
        const { data } = Data

        return (
            <div className="mast-head">
                <div className="body-components">
                    <Header />
                    <Options data={data} />
                    <Edit />
                    <Preview />
                </div>

                <div className="footer-components">
                    <Generatecode />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App