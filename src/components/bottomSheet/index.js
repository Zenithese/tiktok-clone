import React, { useState, useEffect, useRef } from 'react';
import styles from './styles';
import { Animated, View, Text, TextInput, TouchableOpacity, Pressable, Dimensions } from 'react-native';
import Comment from '../Comment/index';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { connect } from 'react-redux';
import { closeBottomSheet } from '../../actions/bottom_sheet_actions';
import { fetchComments } from '../../actions/comments_actions';

const mapStateToProps = ({ ui }) => {
    return {
        comments: ui.viewableComments,
        bottomSheet: ui.bottomSheet
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeBottomSheet: () => dispatch(closeBottomSheet()),
        fetchComments: () => dispatch(fetchComments()),
    }
}

const height = Dimensions.get('window').height

const BottomSheet = ({ bottomSheet, closeBottomSheet, comments, fetchComments }) => {

    const scrollY = useRef(new Animated.Value(0)).current
    const scrollAnim = useRef(new Animated.Value(height)).current

    const translateY = scrollY.interpolate({
        inputRange: [0, 1000],
        outputRange: [0, 1000],
        extrapolate: 'clamp'
    })

    useEffect(() => {
        fetchComments()
    }, [])

    useEffect(() => {
        if (bottomSheet) {
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
                    renderItem={({ item }) => <Comment body={item.body} comments={item.comments} username={item.username} likes={item.likes} key={item.id} />}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder={'Add comment...'}
                />
            </View>
        </Animated.View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomSheet);