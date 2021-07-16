import React from 'react';
import { View } from 'react-native';
import App from './app';
import Auth from './auth';
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const Greeting = ({ currentUser }) => {
    return currentUser ? <App /> : <Auth />;
};

export default connect(
    mapStateToProps
)(Greeting);