import React, { useState, useEffect } from 'react';
import styles from './styles';
import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SpinningAudioTrackImageThatLooksLikeARecord from './SpinningAudioTrackImageThatLooksLikeARecord'
import { connect } from 'react-redux';
import { openBottomSheet, closeBottomSheet } from '../../actions/bottom_sheet_actions';
import { setViewableComments } from '../../actions/viewable_comments_actions';
import { createLike, deleteLike } from '../../actions/likes_actions';
import { setCommentable } from '../../actions/commentable_actions';

const mapStateToProps = ({ session: { auth }, ui }) => {
    return {
        userId: auth.id,
        bottomSheet: ui.bottomSheet,
        viewableComments: ui.viewableComments,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openBottomSheet: () => dispatch(openBottomSheet()),
        closeBottomSheet: () => dispatch(closeBottomSheet()),
        setViewableComments: (comments) => dispatch(setViewableComments(comments)),
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (id) => dispatch(deleteLike(id)),
        setCommentable: (commentable) => dispatch(setCommentable(commentable))
    };
};

const Post = ({ setCommentable, createLike, deleteLike, userId, post, bottomSheet, openBottomSheet, closeBottomSheet, setViewableComments }) => {

    const [paused, setPaused] = useState(true)

    const onPress = () => {
        setPaused(!paused);
    }

    useEffect(() => {
        setViewableComments(post.comments)
    }, [post])

    const onLikePress = () => {
        const like = {
            likeable_type: "Post",
            likeable_id: post.id,
            user_id: userId
        }
        post.likes && post.likes[userId] ? deleteLike(post.likes[userId].id) : createLike(like)
    }

    const onCommentPress = () => {
        if (bottomSheet) {
            closeBottomSheet()
        } else {
            setViewableComments(post.comments)
            setCommentable({
                type: "Post",
                id: post.id
            })
            openBottomSheet()
        }
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPress} >
                <View>
                    <Video
                        source={{
                            uri: post.video_uri,
                        }}
                        style={styles.video}
                        resizeMode={'cover'}
                        // onError={(e: LoadError) => console.log(e)}
                        repeat={true}
                        paused={paused}
                    />


                    <View style={styles.uiContainer}>
                        <View style={styles.actionsContainer}>
                            <View style={styles.profileImageContainer}>
                                <Image 
                                    style={styles.profileImage} 
                                    source={{ uri: post.user.image_uri }} >
                                </Image>
                            </View>
                            <TouchableOpacity style={styles.likesContainer} onPress={onLikePress}>
                                <Fontisto name={'heart'} size={38} color={post.likes && post.likes[userId] ? 'red' : 'white'} />
                                <Text style={styles.count} >{post.likes ? Object.values(post.likes).length : 0}</Text>
                            </TouchableOpacity>
                            <View style={styles.commentsContainer}>
                                <FontAwesome name={'commenting'} size={40} color="white" onPress={onCommentPress} />
                                <Text style={styles.count} >{post.comments.length}</Text>
                            </View>
                            <View style={styles.shareContainer}>
                                <Fontisto name={'share-a'} size={35} color='white' />
                                <Text style={styles.count} >44</Text>
                            </View>
                        </View>

                        <View style={styles.infoContainer}>
                            <View>
                                <Text style={styles.handle}>@{post.user.username}</Text>
                                <Text style={styles.description}>{post.description}</Text>
                                <View style={styles.audioInfo}>
                                    <Entypo name={'beamed-note'} size={24} color='white' />
                                    <Text style={styles.audio}>{post.audio_name}</Text>
                                </View>
                            </View>

                            <SpinningAudioTrackImageThatLooksLikeARecord uri={post.audio_uri} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);