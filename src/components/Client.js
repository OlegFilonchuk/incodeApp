import React, {Component} from 'react';
import {changeActiveClient} from '../AC';
import {connect} from 'react-redux';

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
                <img src={client.general.avatar} alt={client.general.lastName} className='client_img__small'/>
                {`${client.general.firstName} ${client.general.lastName}`}
            </div>
        );
    }
}

export default connect(null, {changeActiveClient})(Client);