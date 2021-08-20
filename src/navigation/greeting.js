import React, { useEffect } from 'react';
import App from './app';
import Auth from './auth';
import { connect } from 'react-redux';
import { validateToken } from '../actions/session_actions';

const mapStateToProps = ({ session: { auth, security }, entities: { users } }) => {
    return {
        currentUser: users[auth.id],
        id: auth.id,
        secure: security,
        token: auth.token
    };
};

// const mapStateToProps = ({ session, entities: { users } }) => {
//     return {
//         currentUser: users[session.id],
//         token: session.token,
//     };
// };

const mapDispatchToProps = dispatch => {
    return {
        validateToken: (token) => dispatch(validateToken(token))
    }
}

const Greeting = ({ id, currentUser, secure, token, validateToken }) => {

    useEffect(() => {
        const user = {
            id,
            token
        }
        validateToken(user)
    }, [])

    return currentUser && secure ? <App /> : <Auth />;
    // return <App />
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);