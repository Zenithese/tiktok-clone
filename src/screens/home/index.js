import React from 'react';
import styles from './styles';
import {View, FlatList, Dimensions} from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import Post from '../../components/Post/index';

// https://youtu.be/3lfnR7OhZY8

const posts = [

    {
        id: 'p1',
        videoUri: 'https://player.vimeo.com/external/393298588.sd.mp4?s=0609115262228e18bb346b0a0aa6bf5587cc11f6&profile_id=165&oauth2_token_id=57447761',
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
        kind: 'post'
    },
    {
        id: 'p2',
        videoUri: 'https://player.vimeo.com/external/473351034.sd.mp4?s=ff63bb067f9c82738074e947374ad17607adaa32&profile_id=165&oauth2_token_id=57447761',
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
        kind: 'post'
    },
    {
        id: 'p3',
        videoUri: 'https://player.vimeo.com/external/434945761.sd.mp4?s=5eb72d29e32af84b927fa4bb08b85674dde2685a&profile_id=165&oauth2_token_id=57447761',
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
        kind: 'post'
    }

]

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]
const dataProvider = new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(posts)
const layoutProvider = new LayoutProvider(
    (i) => {
        if (i == posts.length - 1 && posts[i].kind == 'post') {
            return 'last post'
        } else {
            return posts[i].kind
        }
    },
    (type, dim) => {
        switch (type) {
            case 'post': 
                dim.width = width;
                dim.height = height - 79;
                break;
            case 'last post':
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
        case 'last post':
            return <Post post={data} />
        default:
            return null
    }
}

const Home = () => {
    return (
        <View>
            {/* <FlatList
                style={styles.list}
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 79}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            /> */}
            <RecyclerListView 
                style={styles.list}
                layoutProvider={layoutProvider} 
                dataProvider={dataProvider} 
                rowRenderer={rowRenderer} 
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height - 79}
                snapToAlignment={'start'}
                decelerationRate={0}
            />
        </View>
    )
}

export default Home;