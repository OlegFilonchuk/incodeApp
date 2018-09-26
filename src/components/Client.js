import React, {Component} from 'react';
import {changeActiveClient} from '../AC';
import {connect} from 'react-redux';
import {Image} from 'semantic-ui-react';

class Client extends Component {

    setActiveClient = (ev) => {
        ev.preventDefault();
        const {client, changeActiveClient} = this.props;
        changeActiveClient(client);
    };

    render() {
        const {client} = this.props;
        return (
            <div className='client' onClick={this.setActiveClient}>
                <Image src={client.general.avatar} alt={client.general.lastName} avatar />
                <span>{`${client.general.firstName} ${client.general.lastName}`}</span>
            </div>
        );
    }
}

export default connect(null, {changeActiveClient})(Client);