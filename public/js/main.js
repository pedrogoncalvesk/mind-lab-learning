import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import custom components
import App from './components/app.component';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root-container')
);