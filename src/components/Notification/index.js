import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'

const Notification = () => {

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
                    <Text style={styles.actorName}>Actor Name</Text>
                    <Text style={styles.action}>Action taken</Text>
                </View>
            </View>

            <View style={styles.responseContainer}>
                <Text style={styles.response}>Respond</Text>
            </View>
        </View>
    )
}

export default Notification;