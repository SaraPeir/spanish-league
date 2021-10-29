import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fetch from 'isomorphic-fetch'

// thunk (necessary to fetch and handle promises)
// https://redux-toolkit.js.org/api/createAsyncThunk
// https://stackoverflow.com/questions/60316251/how-to-use-redux-thunk-with-redux-toolkits-createslice
const fetchEventsThunk = createAsyncThunk(
    'fetchEvents/fetchById',
    async (id, thunkAPI) => {
        try {
            const apiUrl = `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${id}`
            const response = await fetch(apiUrl)
            const data = await response.json()
            return data
        } catch (err) {
            return thunkAPI.rejectWithValue({}, err);
        }
    }
)

export const fetchEventsSlice = createSlice({
  name: 'fetchEvents',
  initialState: {
    value: [],
    hasError: false,
    isLoading: false
  },
  extraReducers: {
    [fetchEventsThunk.fulfilled]: (state, action)=> { 
        let data;
        
        try {
            data = action.payload.events
        } catch {
            data = null
        }
        state.value = data
        state.isLoading = false

        if(!data) {
            state.hasError = true
        }
    },
    [fetchEventsThunk.pending]: (state)=> {  
        state.isLoading = true
    },
    [fetchEventsThunk.error]: (state)=> {  
        state.isLoading = false
        state.hasError = true
    },
  },
})

export {fetchEventsThunk};
export default fetchEventsSlice.reducer