import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/Root';
// import './index.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
