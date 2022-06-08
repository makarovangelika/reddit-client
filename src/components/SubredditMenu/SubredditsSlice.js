import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSubreddits = createAsyncThunk('subreddits/getSubreddits',
    async() => {
        const response = await fetch('https://www.reddit.com/subreddits.json');
        const json = await response.json();
        return json.data.children.map(subreddit => subreddit.data)
    });

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoading: false,
        error: false
    },
    reducers: {},
    extraReducers: {
        [fetchSubreddits.pending]: (state, action) => {
            state.isLoading = true;
            state.error = false;
        },
        [fetchSubreddits.fulfilled]: (state, action) => {
            state.subreddits = action.payload;
            state.isLoading = false;
            state.error = false;
        },
        [fetchSubreddits.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export default subredditsSlice.reducer;