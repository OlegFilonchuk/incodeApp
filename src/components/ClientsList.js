import React, {Component} from 'react';
import Client from './Client';
import {connect} from 'react-redux';

class ClientsList extends Component {

    getBody = (data) => (
        data.map((client) => {
            return (
                <li key={client.id}>
                    <Client client={client}/>
                </li>
            )
        })
    );


    render() {
        return (
            <ul>{this.getBody(this.props.clients)}</ul>
        )
    }
}

export default connect(({clients}) => ({
    clients
}))(ClientsList);