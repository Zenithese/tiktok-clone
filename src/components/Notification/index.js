import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'

const Notification = ({ actor, action, notifiable }) => {

    return (
        <View style={styles.notificationContainer}>
            <View style={styles.leftSide}>
                <View style={styles.actorImageContainer}>
                    <Image
                        style={styles.actorImage}
                        source={{ uri: "https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg" }}
                    ></Image>
                </View>

                <View style={styles.actorNameAndActionContainer}>
                    <Text style={styles.actorName}>{actor}</Text>
                    <Text style={styles.action}>{action} {notifiable.type}</Text>
                </View>
            </View>

            <View style={styles.responseContainer}>
                <Text style={styles.response}>Respond</Text>
            </View>
        </View>
    )
}

export default Notification;