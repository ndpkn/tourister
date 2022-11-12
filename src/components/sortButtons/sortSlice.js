import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeFilter: 'all'
}


export const sortSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersChanged: (state, action) => {
            state.activeFilter = action.payload
        }

    }
})

export const { filtersChanged } = sortSlice.actions

export default sortSlice.reducer