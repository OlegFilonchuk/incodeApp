import React, {Component} from 'react';
import {changeClientsList} from '../AC/';
import {Input} from 'semantic-ui-react';
import {connect} from 'react-redux';


class SearchBar extends Component {

  state = {
    value: ''
  };

  onChange = ev => {
    const { clients } = this.props;

    const candidates = clients.filter(client => {
      return Object.values(client).some((value)=>{
        return Object.values(value).some((currentValue) => {
          return currentValue.toLowerCase().includes(ev.target.value.toLowerCase().trim());
        });
      });
    });

    console.log(candidates);

    this.setState({
      value: ev.target.value
    });

    this.props.changeClientsList(candidates);
  };

  render() {
    return (
      <div>
        <Input icon='search' placeholder='Search...' onChange={this.onChange} value={this.state.value} fluid/>
      </div>
    );
  }
}

export default connect(({ clients })=>({
  clients
}), { changeClientsList })(SearchBar);