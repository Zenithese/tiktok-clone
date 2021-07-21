import React, { useRef } from 'react';
import styles from './styles';
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity, Animated } from 'react-native';
import { Header } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TabView from '../../components/TabView/index';
import { logoutCurrentUser, logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ session: { auth }, entities: { users } }) => {
    return {
        token: auth.token,
        currentUser: users[auth.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutCurrentUser: () => dispatch(logoutCurrentUser()),
        logout: (token) => dispatch(logout(token)),
    }
}

const Content = ({ currentUser, token, logout, logoutCurrentUser }) => {

    const scrollY = useRef(new Animated.Value(0)).current

    const profileRef = useRef()
    const posRef = useRef()

    return (
        <View style={styles.container}>
            <Animated.View
                style={styles.headerContainer}
            >
                <Header
                    barStyle='dark-content'
                    backgroundColor='white'
                    leftComponent={<Ionicons name={'person-add-outline'} size={20} color='black' />}
                    centerComponent={
                        <View style={styles.centerHeaderComponent}>
                            <Text style={{ fontWeight: '500' }}>Me</Text>
                            <AntDesign style={{ paddingTop: 3 }} name={'caretdown'} size={10} color='black' />
                        </View>
                    }
                    rightComponent={
                        <TouchableOpacity onPress={() => logout(token)}>
                            <Entypo name={'dots-three-vertical'} size={20} color='black' />
                        </TouchableOpacity>
                    }
                />
            </Animated.View>
            <Animated.ScrollView
                ref={(ref) => profileRef.current = ref}
                showsVerticalScrollIndicator={false}
                bounces={false}
                scrollEventThrottle={1}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    {
                        useNativeDriver: true,
                        listener: (event) => {
                            posRef.current = event.nativeEvent.contentOffset.y
                        }
                    }
                )}
            >
                <View style={styles.topHalfContainer}>
                    <View style={styles.topHalf}>
                        <View style={styles.profileImageAndUsernameContainer}>
                            <Image
                                style={styles.profileImage}
                                source={{ uri: "https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg" }}
                            ></Image>
                            <Text style={styles.username}>@{currentUser.username}</Text>
                        </View>

                        <View style={styles.engagementContainer}>
                            <TouchableWithoutFeedback>
                                <View style={styles.statContainer}>
                                    <Text style={styles.statCount}>{currentUser.followings.length}</Text>
                                    <Text style={styles.statTitle}>Following</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.statDivider} />
                            <TouchableWithoutFeedback>
                                <View style={styles.statContainer}>
                                    <Text style={styles.statCount}>{currentUser.followers.length}</Text>
                                    <Text style={styles.statTitle}>Followers</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.statDivider} />
                            <TouchableWithoutFeedback>
                                <View style={styles.statContainer}>
                                    <Text style={styles.statCount}>{currentUser.posts.reduce((count, post) => {
                                        return count + (post.likes ? Object.values(post.likes).length : 0)
                                    }, 0)}</Text>
                                    <Text style={styles.statTitle}>Like</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={styles.touchablesContainer}>
                            <TouchableWithoutFeedback >
                                <Text style={styles.editTouchable}>Edit Profile</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <FontAwesome style={styles.bookmarkTouchable} name={'bookmark-o'} size={20} color="black" />
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={styles.bioContainer}>
                            <Text>What are you gonna do, shoot me???</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.lowerHalf}>
                    <TabView posRef={posRef} topHeight={styles.topHalfContainer.height} lowerHeight={styles.lowerHalf.height} scrollY={scrollY} profileRef={profileRef} />
                </View>
            </Animated.ScrollView>
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);