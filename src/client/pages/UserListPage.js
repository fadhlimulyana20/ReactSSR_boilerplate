import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';
// import { Container } from 'react-bootstrap';

class userListPage extends Component {
    componentDidMount(){
        this.props.fetchUsers();
        console.log('ok');
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