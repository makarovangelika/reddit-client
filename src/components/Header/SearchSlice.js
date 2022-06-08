import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchResults = createAsyncThunk('search/getSearchResults',
    async (term) => {
        const response = await fetch(`https://www.reddit.com/search.json?q=${term}`);
        const json = await response.json();
        return json.data.children.map(post => post.data);
    }
);

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        term: '',
        results: [],
        isLoading: false,
        error: false
    },
    reducers: {
        setTerm: (state, action) => {
            state.term = action.payload;
        },
        clearTerm: (state, action) => {
            state.term = '';
        }
    },
    extraReducers: {
        [fetchResults.pending]: (state, action) => {
            state.isLoading = true;
            state.error = false;
        },
        [fetchResults.fulfilled]: (state, action) => {
            state.results = action.payload;
            state.isLoading = false;
            state.error = false;
        },
        [fetchResults.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export default searchSlice.reducer;
export const { setTerm, clearTerm } = searchSlice.actions;