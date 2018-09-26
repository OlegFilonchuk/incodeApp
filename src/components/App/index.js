import React, { Component } from 'react';
import ClientsList from '../ClientsList';
import Details from '../Details';
// import './index.css';
import {Container, Segment} from 'semantic-ui-react';

class App extends Component {

    render() {
        return (
            <Container>
                <Segment.Group horizontal>
                    <Segment>
                        <ClientsList/>
                    </Segment>
                    <Segment>
                        <Details/>
                    </Segment>
                </Segment.Group>
            </Container>
        );
    }
}

export default App;
