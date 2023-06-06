
const initialState = {
    filters: [],
    filterLoadingStatus: 'aziz',
    activeFilter: 'all',
}
// const filter = createReducer(initialState, {
//     [filtersFetching]: state => {state.filterLoadingStatus = 'loading'},
//     [filtersFetched]: (state, action) => {
//         state.filterLoadingStatus = 'aziz';
//         state.filters = action.payload
//     },
//     [filtersFetchingError]: state => {state.filterLoadingStatus = 'error'},
//     [activeFilterChanged]: (state, action) => {state.activeFilter = action.payload}
// })
// const filter = createReducer(initialState, builder => {
//     builder
//         .addCase(filtersFetching, state => {state.filterLoadingStatus = 'loading'})
//         .addCase(filtersFetched, (state, action) => {
//             state.filterLoadingStatus = 'aziz'
//             state.filters = action.payload
//         })
//         .addCase(filtersFetchingError, state => {state.filterLoadingStatus = 'error'})
//         .addCase(activeFilterChanged, (state, action) => {state.activeFilter = action.payload})
//         .addDefaultCase(() => {})
// })
const filter = (state = initialState, action) => {
    switch(action.type){
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filterLoadingStatus: 'loading',

            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filterLoadingStatus: 'aziz',
            }
        case 'fILTERS_FETCHING_ERROR':
            return {
                ...state,
                filterLoadingStatus: 'error'
            }
        case 'ACTIVE_FILTER_CHANGED':
            return {
                ...state,
                activeFilter: action.payload
            }
        default: 
        return state
    }
}

export default filter