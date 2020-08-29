import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';
// import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

class userListPage extends Component {
    componentDidMount(){
        this.props.fetchUsers();
        console.log('ok');
    }

    head = () => {
        return (
            <Helmet>
                <title>{ `${this.props.users.length} Users Loaded` }</title>
                <meta property="og:title" content="User List Page" />   
            </Helmet>
        )
    }

    render() { 
        const { users } = this.props;
        const user_list = users.map(item => {
            return (
                <li key={item.id}> {item.name} </li>
            )
        });
        return (  
            <React.Fragment>
                { this.head() }
                <div className="container py-5">
                    <h1>List of User : </h1>
                    <ul>
                        {user_list}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

const MapStateToProps = (state) => {
    return {
        users : state.userReducer,
    }
}

function loadData(store) {
    // console.log("Hey, I'm trying to load some data");
    return store.dispatch(fetchUsers());
}


export default {
    loadData,
    component : connect(MapStateToProps, {fetchUsers})(userListPage)
}