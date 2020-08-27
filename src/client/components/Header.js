import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import react from '../../../assets/images/react.svg';

const Header = ({ auth }) => {
    console.log('My auth status is ', auth);

    const authButton = auth ? (
        <a className="nav-link" href="/api/logout">Logout</a>
    ) : (
        <a className="nav-link" href="/api/auth/google">Login</a>
    );

    return (
        <Navbar bg="dark" variant="dark">
            <Link to="/">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={react}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React SSR
                </Navbar.Brand>
            </Link>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="navbar-item">
                    <Link className="nav-link" to="/admins">Admins</Link>
                </li>
                <li className="nav-item">
                    {authButton}
                </li>
            </ul>
        </Navbar>
    )
}

const MapStateToProps = (state) => ({
    auth : state.authReducer
})

export default connect(MapStateToProps)(Header);