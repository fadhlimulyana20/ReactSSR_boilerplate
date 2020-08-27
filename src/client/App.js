import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions/index';
// import css from 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ route }) => {
    return (
        <div>
            <Header/>
            {renderRoutes(route.routes)}
        </div>
    )
};

export default {
    component : App,
    loadData : ({ dispatch }) => dispatch(fetchCurrentUser())
};