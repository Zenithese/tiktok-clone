import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import Post from '../../components/Post/index';

const post1 = {
    id: 'p1',
    videoUri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
    user: {
        id: 'u1',
        username: 'daviddobrik',
        imageUri: 'https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg',
    },
    description: 'hahahah oh boy @borat',
    audioName: 'NF - The search',
    audioImage: 'https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg',
    likes: 123,
    comments: 12,
    shares: 44,
};

const Home = () => {
    return (
        <View>
            <Post post={post1}/>
        </View>
    )
}

export default Home;