import React, { useState, useEffect } from 'react';
import styles from './styles';
import { View, Dimensions } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import Post from '../../components/Post/index';

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const RLV = () => {

    const _dataProvider = new DataProvider((r1, r2) => r1 !== r2)

    const [dataProvider, setDataProvider] = useState(_dataProvider.cloneWithRows([]));
    const [posts, setPosts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/api/posts')
            .then((response) => response.json())
            .then((json) => {
                const tempFiller = {
                    user: {
                        id: 'u1',
                        username: 'daviddobrik',
                        imageUri: 'https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg',
                    },
                    likes: 123,
                    comments: 12,
                    shares: 44,
                }
                const newData = json.map(post => {
                    return { ...post, ...tempFiller }
                })
                setDataProvider(_dataProvider.cloneWithRows(newData))
                setPosts(newData)
                setLoaded(true)
            })
            .catch((error) => console.log(error))
    }, [])

    const layoutProvider = new LayoutProvider(
        (i) => {
            if (i == posts.length - 1 && posts[i].kind == 'post') {
                return 'last post'
            } else {
                return 'post'
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

    return (
        <View>
            { loaded && 
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
            }
        </View>
    )
}

export default RLV;

// const _posts = [
//     {
//         "id": 1,
//         "video_uri": "https://player.vimeo.com/external/393298588.sd.mp4?s=0609115262228e18bb346b0a0aa6bf5587cc11f6&profile_id=165&oauth2_token_id=57447761",
//         "description": "Art hands, baby!",
//         "audio_name": "audio 1",
//         "audio_uri": "https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg",
//         "kind": "post",
//         user: {
//             id: 'u1',
//             username: 'daviddobrik',
//             imageUri: 'https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg',
//         },
//         likes: 123,
//         comments: 12,
//         shares: 44,
//     },
//     {
//         "id": 2,
//         "video_uri": "https://player.vimeo.com/external/473351034.sd.mp4?s=ff63bb067f9c82738074e947374ad17607adaa32&profile_id=165&oauth2_token_id=57447761",
//         "description": "Puppies!",
//         "audio_name": "audio 2",
//         "audio_uri": "https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg",
//         "kind": "post",
//         user: {
//             id: 'u1',
//             username: 'daviddobrik',
//             imageUri: 'https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg',
//         },
//         likes: 123,
//         comments: 12,
//         shares: 44,
//     },
//     // {
//     //     "id": 3,
//     //     "video_uri": "https://player.vimeo.com/external/434945761.sd.mp4?s=5eb72d29e32af84b927fa4bb08b85674dde2685a&profile_id=165&oauth2_token_id=57447761",
//     //     "description": "Whales and art :)",
//     //     "audio_name": "audio 3",
//     //     "audio_uri": "https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg",
//     //     "kind": "post",
//     //     user: {
//     //         id: 'u1',
//     //         username: 'daviddobrik',
//     //         imageUri: 'https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg',
//     //     },
//     //     likes: 123,
//     //     comments: 12,
//     //     shares: 44,
//     // }
// ]