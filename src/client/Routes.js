import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';

// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route path="/users" component={userList} />
//         </div>
//     );
// }


export default [
    {
        ...App,
        routes : [
            {
                ...HomePage,
                path : '/',
                exact : true,
            },
            {
                ...UserListPage,
                path : '/users',
            }
        ]
    }
]