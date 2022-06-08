import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from './components/SubredditMenu/SubredditsSlice';

export default configureStore({
    reducer: {
        subreddits: subredditsReducer
    }
});