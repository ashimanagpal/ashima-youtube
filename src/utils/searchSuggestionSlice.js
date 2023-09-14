import { createSlice } from "@reduxjs/toolkit";

const SearchSuggestionSlice = createSlice({
    name: "searchsuggestion",
    initialState: {},
    reducers: {
        cacheResult: (state, action) =>{
            state = Object.assign(state, action.payload);
            // state= {...action.payload, ...state};
        },
    },
});

export const {cacheResult} = SearchSuggestionSlice.actions;
export default SearchSuggestionSlice.reducer;






/***
 * 
 * time complexity to search in array = O(n)   -> Bigo of n thatis: order of n
 * time complexity to search in object = O(1)  -> O(1) is much better then O(n)
 * - so for caheing we will use object not array
 */