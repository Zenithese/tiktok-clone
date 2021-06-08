import React from 'react';
import styles from './styles';
import {View, FlatList, Dimensions} from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import Post from '../../components/Post/index';

const posts = [

    {
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
        type: 'post'
    },
    {
        id: 'p2',
        videoUri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
        user: {
            id: 'u1',
            username: 'user 1',
            imageUri: 'https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg',
        },
        description: 'hahahah oh boy @borat',
        audioName: 'NF - The search',
        audioImage: 'https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg',
        likes: 123,
        comments: 12,
        shares: 44,
        type: 'post'
    },
    {
        id: 'p3',
        videoUri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
        user: {
            id: 'u1',
            username: 'user 2',
            imageUri: 'https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg',
        },
        description: 'hahahah oh boy @borat',
        audioName: 'NF - The search',
        audioImage: 'https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg',
        likes: 123,
        comments: 12,
        shares: 44,
        type: 'post'
    }

]

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]
const dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(posts)
const layoutProvider = new LayoutProvider(
    (i) => {
        return posts[i].type
    },
    (type, dim) => {
        switch (type) {
            case 'post': 
                dim.width = width;
                dim.height = height;
                break;
            default:
                dim.width = 0
                dim.height = 0
        }
    }
)
const rowRenderer = (type, data) => {
    switch (type) {
        case 'post':
            return <Post post={data} />
        default:
            return null
    }
}

const Home = () => {
    return (
        <View>
            <RecyclerListView 
                style={styles.list}
                layoutProvider={layoutProvider} 
                dataProvider={dataProvider} 
                rowRenderer={rowRenderer} 
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            />
        </View>
    )
}

export default Home;