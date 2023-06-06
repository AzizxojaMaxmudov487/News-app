import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    filters: [],
    filterLoadingStatus: 'aziz',
    activeFilter: 'all',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filtersFetching: state => { state.filterLoadingStatus = 'loading' },
        filtersFetched: (state, action) => {
            state.filterLoadingStatus = 'aziz';
            state.filters = action.payload
        },
        filtersFetchingError: state => { state.filterLoadingStatus = 'error' },
        activeFilterChanged: (state, action) => { state.activeFilter = action.payload }
    }
})

const { actions, reducer } = filterSlice

export default reducer
export const {filtersFetching,filtersFetched, filtersFetchingError, activeFilterChanged } = actions