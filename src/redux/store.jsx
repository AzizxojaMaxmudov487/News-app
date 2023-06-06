import {configureStore} from '@reduxjs/toolkit';
import news from '../components/NewsList/news_slice'
import filter from './reducers/filter.jsx'
import stringMiddleware from '../middleware/stringMiddleware.jsx';
  
// export const store = createStore(combineReducers({news, filter}), applyMiddleware( ReduxThunk,stringMiddleware))

export const store = configureStore({
    reducer: {news, filter},
    // middleware: [ReduxThunk, stringMiddleware],
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})