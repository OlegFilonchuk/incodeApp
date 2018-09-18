import React, {Component} from 'react';
// import from '../../clients.json';


export  default class ClientsList extends Component {

    loadData = () => {
      /*fetch('../../public/clients')
          .then(response => {console.log(response.json())});
      console.log('done');*/
      const xhr = new XMLHttpRequest();
      xhr.open('GET', '../../clients', true);
      xhr.send();
      xhr.onload = () => {
        if (xhr.status !== 200) {
            alert('Error:' + xhr.status + ': ' + xhr.statusText );
        } else {
            alert('Success:' + xhr.responseText );
        }
      }
    };

    render() {
        return (
            <div>{this.loadData()}</div>
        )
    }
}