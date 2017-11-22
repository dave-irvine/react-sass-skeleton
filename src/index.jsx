import React from 'react';
import ReactDOM from 'react-dom';

// Require App instead of import to force the load order for the styles
require('./css/App.scss');
const App = require('./components/App').default;

ReactDOM.render(<App />, document.getElementById('root'));
