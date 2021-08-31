import { combineReducers } from "redux";
import posts from "./posts_reducer";
import users from "./users_reducer";
import notifications from "./notifications_reducer";
import hashtags from "./hashtags_reducer";

export default combineReducers({
    posts,
    users,
    notifications,
    hashtags
})