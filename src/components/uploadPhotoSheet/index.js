import React, { useState, useEffect, useRef } from 'react';
import styles from './styles';
import { Animated, View, Pressable, Dimensions, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { closeBottomSheet } from '../../actions/bottom_sheet_actions';
import AntDesign from 'react-native-vector-icons/AntDesign';

const mapStateToProps = ({ ui, session: { auth }, entities: { users } }) => {
    return {
        userId: auth.id,
        currentUser: users[auth.id],
        bottomSheet: ui.bottomSheet
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        closeBottomSheet: () => dispatch(closeBottomSheet()),
    }
}

const height = Dimensions.get('window').height

const UploadPhotoSheet = ({ currentUser, bottomSheet, closeBottomSheet }) => {

    const scrollAnim = useRef(new Animated.Value(height)).current

    const [photoFile, setPhotoFile] = useState(null)

    useEffect(() => {
        if (bottomSheet === 'uploadPhoto') {
            Animated.timing(scrollAnim, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            }).start()
        }
    }, [bottomSheet])

    const onClosePress = () => {
        closeBottomSheet();
        Animated.timing(scrollAnim, {
            toValue: height,
            duration: 400,
            useNativeDriver: true,
        }).start()
    }

    const onSubmit = () => {
        const formData = new FormData();
        if (photoFile) {
            formData.append('user[profile_photo]', photoFile);
            updateUser(formData);
        }
    }

    return (
        <Animated.View style={[
                styles.container,
                {
                    transform: [{
                        translateY: scrollAnim
                    }]
                }
            ]}
        >

            <View style={{ flex: 1 }}>
                <Pressable
                    style={styles.modalBackground}
                    onPress={onClosePress}
                />
            </View>
            <View style={styles.bottomSheet}>
                <Pressable onPress={onSubmit}>
                    <View style={styles.profileImageAndUsernameContainer}>
                        <Image
                            style={styles.profileImage}
                            source={{ uri: currentUser.image_uri }}
                        ></Image>
                        <View style={styles.editIconContainer}>
                            <AntDesign name={'edit'} size={20} color={'gray'} />
                        </View>
                    </View>
                </Pressable>
            </View>
        </Animated.View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhotoSheet);