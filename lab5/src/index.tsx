import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import myStore from './MyStore';
import App from './App';

ReactDOM.render(
    <Provider myStore={myStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
