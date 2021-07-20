import React, { useEffect } from 'react';
import styles from './styles';
import { View, FlatList, Dimensions } from 'react-native';
import Notification from '../../components/Notification';
import { connect } from 'react-redux';
import { fetchNotifications } from '../../actions/notifications_actions';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const data = (new Array(5).fill(0).map(_ => new Object))

const mapStateToProps = ({ entities, session: { auth } }) => {
    return {
        notifications: entities.notifications,
        userId: auth.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNotifications: (userId) => dispatch(fetchNotifications(userId)),
    }
}

const Content = ({ userId, notifications, fetchNotifications }) => {

    useEffect(() => {
        fetchNotifications(userId)
    }, [])

    return (
        <View>
            <FlatList
                style={{ width: width }}
                data={notifications}
                renderItem={({ item }) => <Notification actor={item.actor} action={item.action} notifiable={item.notifiable} />}
                // keyExtractor={(item) => item.key}
                showsVerticalScrollIndicator={false}
                bounces={false}
            />
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);