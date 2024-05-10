import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Importă BrowserRouter și alte componente necesare

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Root = () => (
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                {/* Alte rute pot fi adăugate aici */}
            </Switch>
        </Router>
    </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

// Dacă dorești să măsori performanța aplicației, folosește reportWebVitals
reportWebVitals();
