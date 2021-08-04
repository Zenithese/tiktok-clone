import React, { useEffect, useRef } from 'react';
import styles from './styles';
import { Animated, View, Pressable, Dimensions, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { closeBottomSheet } from '../../actions/bottom_sheet_actions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { updateUser } from '../../actions/users_actions';

const ImagePicker = require('react-native-image-picker');

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
        updateUser: (user) => dispatch(updateUser(user)),
    }
}

const height = Dimensions.get('window').height

const UploadPhotoSheet = ({ currentUser, bottomSheet, closeBottomSheet, updateUser }) => {

    const scrollAnim = useRef(new Animated.Value(height)).current

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
        let options = {
            title: 'You can choose one image',
            maxWidth: 256,
            maxHeight: 256,
            mediaType: 'photo',
            includeBase64: true
        };

        ImagePicker.launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const photo = {
                    uri: response.assets[0].uri,
                    name: response.assets[0].fileName,
                    type: response.assets[0].type,
                    base64: response.assets[0].base64,
                    id: currentUser.id,
                    token: currentUser.session_token
                }
                updateUser(photo);
            }
        });
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
                {/* <CameraRollPicker 
                    callback={() => console.log('picked')}
                    groupTypes="All"
                /> */}
                {/* <ScrollView>
                    {photos.map((p, i) => {
                        return (
                            <Image
                                key={i}
                                style={{
                                    width: 300,
                                    height: 100,
                                }}
                                source={{ uri: p.node.image.uri }}
                            />
                        );
                    })}
                </ScrollView> */}

            </View>
        </Animated.View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhotoSheet);