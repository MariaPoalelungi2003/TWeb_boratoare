import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Menu() {
    return (
        <div className='primer'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    );
}

function HomePage() {
    return <h2>Home Page</h2>;
}

function AboutPage() {
    return <h2>About Page</h2>;
}

function ContactPage() {
    return <h2>Contact Page</h2>;
}

function LoginPage() {
    return <h2>Login Page</h2>;
}

function App() {
    return (
        <Router>
            <div>
                <Menu />

                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
