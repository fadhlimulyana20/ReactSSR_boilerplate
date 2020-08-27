import "@babel/polyfill";
const express = require('express');
const app = express();
const path = require('path');

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import { render } from "react-dom";
import proxy from 'express-http-proxy';


app.use(
    '/api',
    proxy('http://react-ssr-api.herokuapp.com', {
        proxyReqOptDecorator(opts){
            opts.headers['x-forwarded-host'] = 'localhost:3000';
            return opts;
        }
    })
);

app.use(express.static('public'));

app.use('/assets', express.static('assets'));
// console.log(path.join(__dirname, 'client', 'assets'));

app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null;
    });
    // map(promise => {
    //     if (promise){
    //         return new Promise((resolve, reject) => {
    //             promise.then(resolve).catch(resolve);
    //         });
    //     }
    // });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    });
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
}); 