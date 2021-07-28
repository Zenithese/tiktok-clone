import React from 'react';
import { View } from 'react-native';
import BottomSheet from '../components/bottomSheet/index';
import UploadPhotoSheet from '../components/uploadPhotoSheet/index';
import { connect } from 'react-redux';

const mapStateToProps = ({ session: { auth, security }, entities: { users } }) => {
    return {
        currentUser: users[auth.id],
        secure: security,
    };
};

const BottomSheets = ({ currentUser, secure }) => {

    return currentUser && secure ? 
        <View>
            <BottomSheet />
            <UploadPhotoSheet />
        </View>
        :
        null
};

export default connect(
    mapStateToProps,
    null
)(BottomSheets);