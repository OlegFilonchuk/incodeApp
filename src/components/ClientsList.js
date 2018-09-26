import React, {Component} from 'react';
import Client from './Client';
import {connect} from 'react-redux';
import {Container, List} from 'semantic-ui-react';

class ClientsList extends Component {

    getBody = (data) => (
        data.map((client) => {
            return (
                <List.Item key={client.id}>
                    <Client client={client}/>
                </List.Item>
            )
        })
    );


    render() {
        return (
            <Container>
                <List divided relaxed selection inverted>
                    {this.getBody(this.props.clients)}
                </List>
            </Container>
        )
    }
}

export default connect(({clients}) => ({
    clients
}))(ClientsList);