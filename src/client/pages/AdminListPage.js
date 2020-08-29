import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions';
import { Container } from 'react-bootstrap';
import requireAuth from '../components/hocs/requireAuth';

class AdminListPage extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmin = () => {
        const { admins } = this.props;
        const AdminsList = admins.map(item => (
            <li key={item.id}>{item.name}</li>
        ));
        return AdminsList;
    }

    render() { 
        return (
            <Container className="py-5">
                <div>
                    <h3>Protected List of Admins</h3>
                    <ul>
                        {this.renderAdmin()}
                    </ul>
                </div>
            </Container>  
        );
    }
}
 
const MapStateToProps = state => ({
    admins : state.adminsReducer
});

export default {
    component : connect(MapStateToProps, { fetchAdmins })(requireAuth(AdminListPage)),
    loadData : ({ dispatch }) => dispatch(fetchAdmins())
}