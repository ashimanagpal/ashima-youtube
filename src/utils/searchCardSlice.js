import { createSlice } from "@reduxjs/toolkit";

const searchCard = createSlice({
    name: 'searchvideocard',
    initiaState: {},
    reducers:{
        filterData: (searchText, videos) =>{

                const filteredData = videos.filter((video) =>
                videos?.snippet?.title?.toLowerCase().includes(searchText.toLowerCase())
                );
                return filteredData;
              }

        }
    })

export const {filterData} = searchCard.actions;
export default searchCard.reducer;