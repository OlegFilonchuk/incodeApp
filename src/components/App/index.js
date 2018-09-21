import React, { Component } from 'react';
import ClientsList from '../ClientsList';
import Details from '../Details';
import './index.css';

class App extends Component {

    render() {
        return (
            <div className='App'>
                <ClientsList/>
                <Details/>
            </div>
        );
    }
}

export default App;
