export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const filtersFetchingError = () => {
    return{
        type: 'fILTERS_FETCHING_ERROR'
    }
}

export const activeFilterChanged = (filter) => (dispatch) => {
    setTimeout(() => {
        dispatch({
            type: 'ACTIVE_FILTER_CHANGED',
            payload: filter
        })
    }, 1000)
}

// export const newsFetching = createAction('NEWS_FETCHING')
// export const newsFetched = createAction('NEWS_FETCHED')
// export const newsFetchingError = createAction('NEWS_FETCHING_ERROR')
// export const newsCreated = createAction('NEWS_CREATED')
// export const newsDeleted = createAction('NEWS_DELETED')