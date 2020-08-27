import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={{}} location={req.path}>
                {/* <Routes /> */}
                <div> {renderRoutes(Routes)} </div>
            </StaticRouter>
        </Provider>
    );

    return `
        <html>
            <head>
                <link rel="shortcut icon" href="/assets/images/react.svg" />
            </head>
            <body>
                <div id="root">${content}</div>
                <script> 
                    window.INITIAL_STATE = ${JSON.stringify(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

}