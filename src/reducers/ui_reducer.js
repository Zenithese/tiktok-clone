import { combineReducers } from 'redux';
import bottomSheet from './bottom_sheet_reducer';
import viewableComments from './viewable_comments_reducer';
import commentable from './commentable_reducer';

export default combineReducers({
    bottomSheet,
    viewableComments,
    commentable,
});