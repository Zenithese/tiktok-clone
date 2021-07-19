import React, { useState, useEffect } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { View, Dimensions } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import Post from '../../components/Post/index';
import { fetchPosts } from '../../actions/posts_actions';

const mapStateToProps = ({ entities }) => {
    return {
        posts: Object.values(entities.posts)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
    };
};

const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height]

const RLV = ({ posts, fetchPosts }) => {

    const _dataProvider = new DataProvider((r1, r2) => r1 !== r2)

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetchPosts();
    }, [])

    useEffect(() => {
        if (posts.length) {
            setLoaded(true)
        }
    }, [posts])

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
            {loaded &&
                <RecyclerListView
                    style={styles.list}
                    layoutProvider={layoutProvider}
                    dataProvider={_dataProvider.cloneWithRows(posts)}
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

export default connect(mapStateToProps, mapDispatchToProps)(RLV);