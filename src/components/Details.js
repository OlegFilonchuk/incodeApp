import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {

    getBody = () => {
        const client = this.props.activeClient;
        if (Object.keys(client).length === 0) return `There will be displayed client's information`;
        return (
            <div className='details'>
                <img src={client.general.avatar} alt={client.general.lastName}/>
                <div>{`${client.general.firstName} ${client.general.lastName}`}</div>
                <div>{`${client.job.title} - ${client.job.company}`}</div>
                <div>{`Contact: ${client.contact.email}, ${client.contact.phone}`}</div>
            </div>
        );
    };

    render() {
        return this.getBody();
    }
}

export default connect(({activeClient}) => ({
    activeClient
}))(Details);