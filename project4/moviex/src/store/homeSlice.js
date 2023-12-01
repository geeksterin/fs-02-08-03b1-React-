import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {},
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;

/**
 Cake

 constants.js
    
    const BUY_CAKE = "BUY_CAKE

actions.js

    function buyCake()
    {
        return {
        type:BUY_CAKE
        }
    }

reducer.js

    const intitalState = {
    
    }

    const reducer=(state = intitialState,action)=>{
        switch(action.type)
        {
        
        }
    }
 
 
 store.js
    
 
 */
