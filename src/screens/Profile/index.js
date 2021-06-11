import React from 'react';
import styles from './styles';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Header } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TabView from '../../components/TabView/index';

const Profile = () => {

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
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
                    rightComponent={<Entypo name={'dots-three-vertical'} size={20} color='black' />}
                />
            </View>
            <View style={styles.profileImageAndUsernameContainer}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: "https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg"}}
                ></Image>
                <Text style={styles.username}>@username</Text>
            </View>

            <View style={styles.engagementContainer}>
                <TouchableWithoutFeedback>
                    <View style={styles.statContainer}>
                        <Text style={styles.statCount}>3451</Text>
                        <Text style={styles.statTitle}>Following</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.statDivider}/>
                <TouchableWithoutFeedback>
                    <View style={styles.statContainer}>
                        <Text style={styles.statCount}>73452</Text>
                        <Text style={styles.statTitle}>Followers</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.statDivider}/>
                <TouchableWithoutFeedback>
                    <View style={styles.statContainer}>
                        <Text style={styles.statCount}>8768</Text>
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

            <TabView 
                // tabs={[
                //     <FontAwesome5 name={'grip-vertical'} size={15} color='black' />,
                //     <Feather name={'heart'} size={15} color='black' />,
                //     <Feather name={'lock'} size={15} color='black' />
                // ]}
                // tabs={[
                //     { 
                //         key: 'tab1',
                //         body: <FontAwesome5 name={'grip-vertical'} size={15} color='black' />,
                //         ref: React.createRef
                //     },
                //     { 
                //         key: 'tab2',
                //         body: <Feather name={'heart'} size={15} color='black' />,
                //         ref: React.createRef
                //     },
                //     { 
                //         key: 'tab3',
                //         body: <Feather name={'lock'} size={15} color='black' />,
                //         ref: React.createRef
                //     },
                // ]}
            />
        </View>
    )
}

export default Profile;