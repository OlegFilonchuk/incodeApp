import React, { Component } from 'react';
import ClientsList from '../ClientsList';
import Details from '../Details';
import {Container, Grid, Segment} from 'semantic-ui-react';

class App extends Component {

    render() {
        return (
            <Container>
                <Grid columns={2}>
                    <Grid.Column width={4}>
                        <Segment inverted>
                            <ClientsList/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Segment secondary color='black' basic>
                            <Details/>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default App;
