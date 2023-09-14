import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import SearchSuggestionSlice from "./searchSuggestionSlice";
import chatSlice from "./chatSlice";


const store = configureStore({
    reducer: {
        nav: navSlice,
        searchsuggestion: SearchSuggestionSlice,
        chat: chatSlice,
    },
});

export default store;