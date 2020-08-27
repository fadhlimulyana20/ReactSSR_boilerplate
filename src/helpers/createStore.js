import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension'; 

export default (req) => {
    const axiosInstance = axios.create({
        baseURL : 'http://react-ssr-api.herokuapp.com',
        headers : { cookie : req.get('cookie') || '' }
    })

    const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance))));
    
    return store;
}
