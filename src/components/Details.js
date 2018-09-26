import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Image, Flag, Header, List, Grid} from 'semantic-ui-react';


class Details extends Component {

    getBody = () => {

        const client = this.props.activeClient;

        if (Object.keys(client).length === 0) return (
            <Container>
                <Header
                    textAlign='center'
                    as='h2'
                    content="There will be displayed client's information"
                    subheader="Just choose one from the list"
                />
            </Container>
        );

        return (
            <Container text>
                <Grid columns={2}>
                    <Grid.Column width={4}>
                        <Image src={client.general.avatar} alt={client.general.lastName}/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Header as='h2' dividing>
                            <Flag name={client.address.country.toLowerCase()} title={client.address.country}/>
                            {`${client.general.firstName} ${client.general.lastName}`}
                        </Header>
                        <List size='huge' relaxed>
                            <List.Item>
                                <List.Icon name='briefcase'/>
                                <List.Content>
                                    <span>{`${client.job.title}  -  `}</span>
                                    <strong><i>{client.job.company}</i></strong>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='envelope'/>
                                <List.Content>
                                    {client.contact.email}
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='phone square'/>
                                <List.Content>
                                    {client.contact.phone}
                                </List.Content>
                        </List.Item>
                            <List.Item>
                                <List.Icon name='home'/>
                                <List.Content>
                                    {`${client.address.street}, ${client.address.city}, ${client.address.country}`}
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    };

    render() {
        return this.getBody();
    }
}

export default connect(({activeClient}) => ({
    activeClient
}))(Details);