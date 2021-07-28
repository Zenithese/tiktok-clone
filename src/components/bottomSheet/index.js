import React, { useState, useEffect, useRef } from 'react';
import styles from './styles';
import { Animated, View, Text, TextInput, TouchableOpacity, Pressable, Dimensions, KeyboardAvoidingView, Keyboard } from 'react-native';
import Comment from '../Comment/index';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { connect } from 'react-redux';
import { closeBottomSheet } from '../../actions/bottom_sheet_actions';
import { fetchComments, createComment } from '../../actions/comments_actions';

const mapStateToProps = ({ ui, session: { auth } }) => {
    return {
        comments: ui.viewableComments,
        commentable: ui.commentable,
        bottomSheet: ui.bottomSheet,
        userId: auth.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeBottomSheet: () => dispatch(closeBottomSheet()),
        fetchComments: () => dispatch(fetchComments()),
        createComment: (comment) => dispatch(createComment(comment))
    }
}

const height = Dimensions.get('window').height

const BottomSheet = ({ userId, commentable, bottomSheet, closeBottomSheet, comments, fetchComments, createComment }) => {

    const inputRef = useRef(null)
    const scrollY = useRef(new Animated.Value(0)).current
    const scrollAnim = useRef(new Animated.Value(height)).current

    const translateY = scrollY.interpolate({
        inputRange: [0, 1000],
        outputRange: [0, 1000],
        extrapolate: 'clamp'
    })

    const [body, setBody] = useState("")

    useEffect(() => {
        fetchComments()
    }, [])

    useEffect(() => {
        if (commentable.type !== "Post") {
            inputRef.current.focus()
        }
    }, [commentable])

    useEffect(() => {
        if (bottomSheet === 'comments') {
            Animated.timing(scrollAnim, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            }).start()
        }
    }, [bottomSheet])

    const onClosePress = () => {
        Keyboard.dismiss();
        closeBottomSheet();
        Animated.timing(scrollAnim, {
            toValue: height,
            duration: 400,
            useNativeDriver: true,
        }).start()
    }

    const onSubmit = () => {
        const comment = {
            commentable_type: commentable.type,
            commentable_id: commentable.id,
            body: body,
            user_id: userId
        }
        createComment(comment)
        inputRef.current.clear()
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
                <Animated.FlatList
                    style={styles.bottomSheet}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    scrollEnabled={true}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponentStyle={{ zIndex: 1 }}
                    ListHeaderComponent={
                        <Animated.View
                            style={
                                [
                                    styles.header,
                                    {
                                        transform: [{
                                            translateY: translateY
                                        }]
                                    }
                                ]
                            }
                        >
                            <View>
                                <Text>Comments</Text>
                            </View>
                            <TouchableOpacity style={styles.closeContainer} onPress={onClosePress} >
                                <Fontisto name={'close-a'} size={13} color='black' />
                            </TouchableOpacity>
                        </Animated.View>
                    }
                    data={comments}
                    renderItem={({ item }) => <Comment body={item.body} comments={item.comments} username={item.username} likes={item.likes} commentId={item.id} key={item.id} />}
                />
            </View>
            <KeyboardAvoidingView behavior={'position'}>
                <View style={styles.inputContainer}>
                    <TextInput
                        ref={ref => inputRef.current = ref}
                        style={styles.input}
                        placeholder={'Add comment...'}
                        onChangeText={(text) => setBody(text)}
                        onSubmitEditing={onSubmit}
                    />
                </View>
            </KeyboardAvoidingView>
        </Animated.View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomSheet);