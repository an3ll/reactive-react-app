import React, {Component} from 'react'
import {render} from 'react-dom'
import MessageInput from "./components/MessageInput";
import BeerTable from "./components/BeerTable";

class App extends Component {

    render () {
        return (
            <div className='app row'>
                <div className='col-xs-offset-3'>
                    <BeerTable/>
                    <MessageInput/>
                </div>
            </div>
        )
    }
}
render(<App />, document.getElementById('app'))