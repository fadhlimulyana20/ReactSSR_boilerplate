import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default ChildComponent => {
    class RequireAuth extends Component {
        render(){
            const { auth } = this.props;
            switch (auth){
                case false :
                    return <Redirect to="/" />;
                case null :
                    return <div>Loading...</div>;
                default :
                    return <ChildComponent {...this.props} />;
            }
        }
    }

    const MapStateToProps = state => ({
        auth : state.authReducer,
    });

    return connect(MapStateToProps)(RequireAuth);
}