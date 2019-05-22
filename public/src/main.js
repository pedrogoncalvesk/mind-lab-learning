import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './components/App';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <CssBaseline />
        <App />
    </Provider>,
    document.getElementById('root-container')
);
